<template>
    <div class="match">
        <div class="home-team">
            <span class="flag"><img :src="getFlag(match.home)" :alt="match.home" height="90" width="90"></span>
            <span>{{match.home}}</span>
        </div>
        <div class="score">
            <span>{{match.score}}</span>
        </div>
        <div class="away-team">
            <span class="flag"><img :src="getFlag(match.away)" :alt="match.away" height="90" width="90"></span>
            <span>{{match.away}}</span>
        </div>
        <p>Date: {{match.date}}</p>
    </div>
</template>

<script>
import flagMapping from '@/helpers/flagMapping';
export default {
    props: ['match'],
    methods: {
        getFlag(team){
            console.log(flagMapping[team])
            if(!flagMapping[team]){
                return '/img/unknown-flag.19ac8fde.svg';
            }
            return flagMapping[team];
        }
    }
}
</script>

<style scoped>
    .match{
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>