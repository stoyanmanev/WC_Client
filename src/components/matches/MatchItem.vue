<template>
    <div class="match">
        <p class="date">{{match.date}}</p>
        <div class="wrapper">
            <div :class="`home-team team ${winner === 'home' ? 'winner' : ''}`">
                <span class="flag">
                    <img v-if="match.home === 'Катар'" src="@/images/flags/qatar-flag.svg" :alt="match.home"/>
                    <img v-else-if="match.home === 'Аржентина'" src="@/images/flags/argentina-flag.svg" :alt="match.home"/>
                    <img v-else-if="match.home === 'Австралия'" src="@/images/flags/australia-flag.svg" :alt="match.home"/>
                    <img v-else-if="match.home === 'Белгия'" src="@/images/flags/belgium-flag.svg" :alt="match.home"/>
                    <img v-else-if="match.home === 'Бразилия'" src="@/images/flags/brazil-flag.svg" :alt="match.home"/>
                    <img v-else-if="match.home === 'Камерун'" src="@/images/flags/cameroon-flag.svg" :alt="match.home"/>
                    <img v-else-if="match.home === 'Канада'" src="@/images/flags/canada-flag.svg" :alt="match.home"/>
                    <img v-else-if="match.home === 'Коста Рика'" src="@/images/flags/costa-rica-flag.svg" :alt="match.home"/>
                    <img v-else-if="match.home === 'Хърватия'" src="@/images/flags/croatia-flag.svg" :alt="match.home"/>
                    <img v-else-if="match.home === 'Дания'" src="@/images/flags/denmark-flag.svg" :alt="match.home"/>
                    <img v-else-if="match.home === 'Еквадор'" src="@/images/flags/ecuador-flag.svg" :alt="match.home"/>
                    <img v-else-if="match.home === 'Англия'" src="@/images/flags/england-flag.svg" :alt="match.home"/>
                    <img v-else-if="match.home === 'Франция'" src="@/images/flags/france-flag.svg" :alt="match.home"/>
                    <img v-else-if="match.home === 'Германия'" src="@/images/flags/germany-flag.svg" :alt="match.home"/>
                    <img v-else-if="match.home === 'Гана'" src="@/images/flags/ghana-flag.svg" :alt="match.home"/>
                    <img v-else-if="match.home === 'Иран'" src="@/images/flags/iran-flag.svg" :alt="match.home"/>
                    <img v-else-if="match.home === 'Япония'" src="@/images/flags/japan-flag.svg" :alt="match.home"/>
                    <img v-else-if="match.home === 'Мексико'" src="@/images/flags/mexico-flag.svg" :alt="match.home"/>
                    <img v-else-if="match.home === 'Мароко'" src="@/images/flags/morocco-flag.svg" :alt="match.home"/>
                    <img v-else-if="match.home === 'Нидерландия'" src="@/images/flags/netherlands-flag.svg" :alt="match.home"/>
                    <img v-else-if="match.home === 'Полша'" src="@/images/flags/poland-flag.svg" :alt="match.home"/>
                    <img v-else-if="match.home === 'Португалия'" src="@/images/flags/portugal-flag.svg" :alt="match.home"/>
                    <img v-else-if="match.home === 'Саудитска Арабия'" src="@/images/flags/saudi-arabia-flag.svg" :alt="match.home"/>
                    <img v-else-if="match.home === 'Сенегал'" src="@/images/flags/senegal-flag.svg" :alt="match.home"/>
                    <img v-else-if="match.home === 'Сърбия'" src="@/images/flags/serbia-flag.svg" :alt="match.home"/>
                    <img v-else-if="match.home === 'Южна Корея'" src="@/images/flags/south-korea-flag.svg" :alt="match.home"/>
                    <img v-else-if="match.home === 'Испания'" src="@/images/flags/spain-flag.svg" :alt="match.home"/>
                    <img v-else-if="match.home === 'Швейцария'" src="@/images/flags/switzerland-flag.svg" :alt="match.home"/>
                    <img v-else-if="match.home === 'Тунис'" src="@/images/flags/tunisia-flag.svg" :alt="match.home"/>
                    <img v-else-if="match.home === 'САЩ'" src="@/images/flags/united-states-flag.svg" :alt="match.home"/>
                    <img v-else-if="match.home === 'Уругвай'" src="@/images/flags/uruguay-flag.svg" :alt="match.home"/>
                    <img v-else-if="match.home === 'Уелс'" src="@/images/flags/wales-flag.svg" :alt="match.home"/>
                </span>
                <span>{{match.home}}</span>
            </div>
            <div :class="`score ${winner === 'draw' ? 'winner' : ''}`">
                <span>{{match.score}}</span>
            </div>
            <div :class="`away-team team ${winner === 'away' ? 'winner' : ''}`">
                <span>{{match.away}}</span>
                <span class="flag">
                    <img v-if="match.away === 'Катар'" src="@/images/flags/qatar-flag.svg" :alt="match.away"/>
                    <img v-else-if="match.away === 'Аржентина'" src="@/images/flags/argentina-flag.svg" :alt="match.away"/>
                    <img v-else-if="match.away === 'Австралия'" src="@/images/flags/australia-flag.svg" :alt="match.away"/>
                    <img v-else-if="match.away === 'Белгия'" src="@/images/flags/belgium-flag.svg" :alt="match.away"/>
                    <img v-else-if="match.away === 'Бразилия'" src="@/images/flags/brazil-flag.svg" :alt="match.away"/>
                    <img v-else-if="match.away === 'Камерун'" src="@/images/flags/cameroon-flag.svg" :alt="match.away"/>
                    <img v-else-if="match.away === 'Канада'" src="@/images/flags/canada-flag.svg" :alt="match.away"/>
                    <img v-else-if="match.away === 'Коста Рика'" src="@/images/flags/costa-rica-flag.svg" :alt="match.away"/>
                    <img v-else-if="match.away === 'Хърватия'" src="@/images/flags/croatia-flag.svg" :alt="match.away"/>
                    <img v-else-if="match.away === 'Дания'" src="@/images/flags/denmark-flag.svg" :alt="match.away"/>
                    <img v-else-if="match.away === 'Еквадор'" src="@/images/flags/ecuador-flag.svg" :alt="match.away"/>
                    <img v-else-if="match.away === 'Англия'" src="@/images/flags/england-flag.svg" :alt="match.away"/>
                    <img v-else-if="match.away === 'Франция'" src="@/images/flags/france-flag.svg" :alt="match.away"/>
                    <img v-else-if="match.away === 'Германия'" src="@/images/flags/germany-flag.svg" :alt="match.away"/>
                    <img v-else-if="match.away === 'Гана'" src="@/images/flags/ghana-flag.svg" :alt="match.away"/>
                    <img v-else-if="match.away === 'Иран'" src="@/images/flags/iran-flag.svg" :alt="match.away"/>
                    <img v-else-if="match.away === 'Япония'" src="@/images/flags/japan-flag.svg" :alt="match.away"/>
                    <img v-else-if="match.away === 'Мексико'" src="@/images/flags/mexico-flag.svg" :alt="match.away"/>
                    <img v-else-if="match.away === 'Мароко'" src="@/images/flags/morocco-flag.svg" :alt="match.away"/>
                    <img v-else-if="match.away === 'Нидерландия'" src="@/images/flags/netherlands-flag.svg" :alt="match.away"/>
                    <img v-else-if="match.away === 'Полша'" src="@/images/flags/poland-flag.svg" :alt="match.away"/>
                    <img v-else-if="match.away === 'Португалия'" src="@/images/flags/portugal-flag.svg" :alt="match.away"/>
                    <img v-else-if="match.away === 'Саудитска Арабия'" src="@/images/flags/saudi-arabia-flag.svg" :alt="match.away"/>
                    <img v-else-if="match.away === 'Сенегал'" src="@/images/flags/senegal-flag.svg" :alt="match.away"/>
                    <img v-else-if="match.away === 'Сърбия'" src="@/images/flags/serbia-flag.svg" :alt="match.away"/>
                    <img v-else-if="match.away === 'Южна Корея'" src="@/images/flags/south-korea-flag.svg" :alt="match.away"/>
                    <img v-else-if="match.away === 'Испания'" src="@/images/flags/spain-flag.svg" :alt="match.away"/>
                    <img v-else-if="match.away === 'Швейцария'" src="@/images/flags/switzerland-flag.svg" :alt="match.away"/>
                    <img v-else-if="match.away === 'Тунис'" src="@/images/flags/tunisia-flag.svg" :alt="match.away"/>
                    <img v-else-if="match.away === 'САЩ'" src="@/images/flags/united-states-flag.svg" :alt="match.away"/>
                    <img v-else-if="match.away === 'Уругвай'" src="@/images/flags/uruguay-flag.svg" :alt="match.away"/>
                    <img v-else-if="match.away === 'Уелс'" src="@/images/flags/wales-flag.svg" :alt="match.away"/>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['match'],
    data(){
        return{
            flag: null,
            winner: 'away'
        } 
    },
    methods: {
        setWinner(){
            if(this.match.score === '-'){
                return this.winner = null;
            }else{
                const goals = this.match.score.split('-');
                const homeGoals = +goals[0];
                const awayGoals = +goals[1];
                const result = homeGoals - awayGoals;

                if(result > 0){
                    return this.winner = 'home';
                }else if(result < 0){
                    return this.winner = 'away';
                }else{
                    return this.winner = 'draw';
                }
            }
        }
    },
    created(){
        this.setWinner();
    }
}
</script>

<style scoped>
    .match{
        margin-bottom: 48px;
    }
    .wrapper{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
    }
    .wrapper:before{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        height: calc(100% - 40px);
        width: 100%;
        transform: translate(-50%, -50%);
        background: radial-gradient(circle, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 100%);
        z-index: -1;
    }
    .wrapper > div{
        flex-basis: 100%;
        max-width: 100%;
    }
    .wrapper > .score{
        max-width: 178px;
        flex-basis: 178px;
    }
    .team{
        display: flex;
        flex-direction: row;
        text-align: center;
        justify-content: space-between;
        align-items: center;
        font-size: 25px;
        line-height: calc(1em + 10px);
    }

    .team.winner,
    .score.winner{
        font-weight: 600;
    }
    .flag{
        position: relative;
        height: 108px;
        width: 108px;
        clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        background-color: var(--color-light);
    }
    .flag:before{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        height: calc(100% - 50px);
        width: calc(100% - 50px);
        transform: translate(-50%, -50%) rotate(45deg);
        border: 9px solid var(--color-light);
    }
    .flag img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    .score{
        text-align: center;
    }
    .date{
        display: block;
        text-align: center;
    }
</style>