import store from '@/store/index';
import sortByPoints from '@/helpers/sortByPoints';

export default {
    async loadRankings(context){
        const loadBets = await store.dispatch('bets/loadBets');
        const loadUsers = await store.dispatch('auth/loadUsers');
        const bets = loadBets && store.getters['bets/betsList'];
        const users = loadUsers && store.getters['auth/usersList'];
        const complatedMatches = store.getters['matches/finishedMatches'].matches;
        const usersForUpdate = [];

        Object.keys(users).forEach(async(key) => {
            const user = key;
            const startedPoints = users[user].points;
            let userPoints = 0;
            Object.values(complatedMatches).forEach(match => {
                const key = `${match.home}-${match.away}:${match.date}`;
                if(bets[user] && bets[user][key]){
                    const bet = bets[user][key];
                    const [homeGoals, awayGoals] = match.score.split('-');
                    if(!users[user].points) users[user].points = 0;
                    if(+homeGoals - +awayGoals > 0){
                        const sign = '1';
                        if(sign === bet){
                            userPoints++
                        }
                    }else if(+homeGoals - +awayGoals < 0){
                        const sign = '2';
                        if(sign === bet){
                            userPoints++
                        }
                    }else{
                        const sign = 'X';
                        if(sign === bet){
                            userPoints++
                        }
                    }                    
                }
            })

            if(startedPoints !== userPoints){
                users[user].points = userPoints;
                usersForUpdate.push(user);
            }
        })

        usersForUpdate.forEach(async(user) => {
            await store.dispatch('auth/updateUser', {username: user, points: users[user].points});
        })

         
        const sort = sortByPoints(users);
        context.commit('setRinkings', sort);
    }
};