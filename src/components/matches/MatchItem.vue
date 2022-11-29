<template>
  <div :class="`match ${this.bet ? 'bet' : ''} ${matchBet !== null ? 'mb' : ''}`">
    <p v-if="!isLive" class="date">{{startHourPreset}}</p>
    <p v-else class="date">{{ minute }}{{(minute !== null ? "'" : '')}}</p>
    <div class="wrapper">
      <div :class="`home-team team ${winner === 'home' ? 'winner' : ''}`">
        <span class="flag" @click="setBet('1')">
          <img
            v-if="match.home === 'Катар'"
            src="@/images/flags/qatar-flag.svg"
            :alt="match.home"
          />
          <img
            v-else-if="match.home === 'Аржентина'"
            src="@/images/flags/argentina-flag.svg"
            :alt="match.home"
          />
          <img
            v-else-if="match.home === 'Австралия'"
            src="@/images/flags/australia-flag.svg"
            :alt="match.home"
          />
          <img
            v-else-if="match.home === 'Белгия'"
            src="@/images/flags/belgium-flag.svg"
            :alt="match.home"
          />
          <img
            v-else-if="match.home === 'Бразилия'"
            src="@/images/flags/brazil-flag.svg"
            :alt="match.home"
          />
          <img
            v-else-if="match.home === 'Камерун'"
            src="@/images/flags/cameroon-flag.svg"
            :alt="match.home"
          />
          <img
            v-else-if="match.home === 'Канада'"
            src="@/images/flags/canada-flag.svg"
            :alt="match.home"
          />
          <img
            v-else-if="match.home === 'Коста Рика'"
            src="@/images/flags/costa-rica-flag.svg"
            :alt="match.home"
          />
          <img
            v-else-if="match.home === 'Хърватска'"
            src="@/images/flags/croatia-flag.svg"
            :alt="match.home"
          />
          <img
            v-else-if="match.home === 'Дания'"
            src="@/images/flags/denmark-flag.svg"
            :alt="match.home"
          />
          <img
            v-else-if="match.home === 'Еквадор'"
            src="@/images/flags/ecuador-flag.svg"
            :alt="match.home"
          />
          <img
            v-else-if="match.home === 'Англия'"
            src="@/images/flags/england-flag.svg"
            :alt="match.home"
          />
          <img
            v-else-if="match.home === 'Франция'"
            src="@/images/flags/france-flag.svg"
            :alt="match.home"
          />
          <img
            v-else-if="match.home === 'Германия'"
            src="@/images/flags/germany-flag.svg"
            :alt="match.home"
          />
          <img
            v-else-if="match.home === 'Гана'"
            src="@/images/flags/ghana-flag.svg"
            :alt="match.home"
          />
          <img
            v-else-if="match.home === 'Иран'"
            src="@/images/flags/iran-flag.svg"
            :alt="match.home"
          />
          <img
            v-else-if="match.home === 'Япония'"
            src="@/images/flags/japan-flag.svg"
            :alt="match.home"
          />
          <img
            v-else-if="match.home === 'Мексико'"
            src="@/images/flags/mexico-flag.svg"
            :alt="match.home"
          />
          <img
            v-else-if="match.home === 'Мароко'"
            src="@/images/flags/morocco-flag.svg"
            :alt="match.home"
          />
          <img
            v-else-if="match.home === 'Нидерландия'"
            src="@/images/flags/netherlands-flag.svg"
            :alt="match.home"
          />
          <img
            v-else-if="match.home === 'Полша'"
            src="@/images/flags/poland-flag.svg"
            :alt="match.home"
          />
          <img
            v-else-if="match.home === 'Португалия'"
            src="@/images/flags/portugal-flag.svg"
            :alt="match.home"
          />
          <img
            v-else-if="match.home === 'Саудитска Арабия'"
            src="@/images/flags/saudi-arabia-flag.svg"
            :alt="match.home"
          />
          <img
            v-else-if="match.home === 'Сенегал'"
            src="@/images/flags/senegal-flag.svg"
            :alt="match.home"
          />
          <img
            v-else-if="match.home === 'Сърбия'"
            src="@/images/flags/serbia-flag.svg"
            :alt="match.home"
          />
          <img
            v-else-if="match.home === 'Южна Корея'"
            src="@/images/flags/south-korea-flag.svg"
            :alt="match.home"
          />
          <img
            v-else-if="match.home === 'Испания'"
            src="@/images/flags/spain-flag.svg"
            :alt="match.home"
          />
          <img
            v-else-if="match.home === 'Швейцария'"
            src="@/images/flags/switzerland-flag.svg"
            :alt="match.home"
          />
          <img
            v-else-if="match.home === 'Тунис'"
            src="@/images/flags/tunisia-flag.svg"
            :alt="match.home"
          />
          <img
            v-else-if="match.home === 'САЩ'"
            src="@/images/flags/united-states-flag.svg"
            :alt="match.home"
          />
          <img
            v-else-if="match.home === 'Уругвай'"
            src="@/images/flags/uruguay-flag.svg"
            :alt="match.home"
          />
          <img
            v-else-if="match.home === 'Уелс'"
            src="@/images/flags/wales-flag.svg"
            :alt="match.home"
          />
        </span>
        <span>{{ match.home }}</span>
        <span v-if="this.bet" class="label">Резултата от срещата ще бъде победа за {{match.home}}</span>
      </div>
      <div
        :class="`score ${winner === 'draw' ? 'winner' : ''}`"
        @click="setBet('X')"
      >
        <span>{{ match.score }}</span>
        <span v-if="this.bet" class="label">Резултата от срещата ще бъде равен</span>
      </div>
      <div :class="`away-team team ${winner === 'away' ? 'winner' : ''}`">
        <span>{{ match.away }}</span>
        <span class="flag" @click="setBet('2')">
          <img
            v-if="match.away === 'Катар'"
            src="@/images/flags/qatar-flag.svg"
            :alt="match.away"
          />
          <img
            v-else-if="match.away === 'Аржентина'"
            src="@/images/flags/argentina-flag.svg"
            :alt="match.away"
          />
          <img
            v-else-if="match.away === 'Австралия'"
            src="@/images/flags/australia-flag.svg"
            :alt="match.away"
          />
          <img
            v-else-if="match.away === 'Белгия'"
            src="@/images/flags/belgium-flag.svg"
            :alt="match.away"
          />
          <img
            v-else-if="match.away === 'Бразилия'"
            src="@/images/flags/brazil-flag.svg"
            :alt="match.away"
          />
          <img
            v-else-if="match.away === 'Камерун'"
            src="@/images/flags/cameroon-flag.svg"
            :alt="match.away"
          />
          <img
            v-else-if="match.away === 'Канада'"
            src="@/images/flags/canada-flag.svg"
            :alt="match.away"
          />
          <img
            v-else-if="match.away === 'Коста Рика'"
            src="@/images/flags/costa-rica-flag.svg"
            :alt="match.away"
          />
          <img
            v-else-if="match.away === 'Хърватска'"
            src="@/images/flags/croatia-flag.svg"
            :alt="match.away"
          />
          <img
            v-else-if="match.away === 'Дания'"
            src="@/images/flags/denmark-flag.svg"
            :alt="match.away"
          />
          <img
            v-else-if="match.away === 'Еквадор'"
            src="@/images/flags/ecuador-flag.svg"
            :alt="match.away"
          />
          <img
            v-else-if="match.away === 'Англия'"
            src="@/images/flags/england-flag.svg"
            :alt="match.away"
          />
          <img
            v-else-if="match.away === 'Франция'"
            src="@/images/flags/france-flag.svg"
            :alt="match.away"
          />
          <img
            v-else-if="match.away === 'Германия'"
            src="@/images/flags/germany-flag.svg"
            :alt="match.away"
          />
          <img
            v-else-if="match.away === 'Гана'"
            src="@/images/flags/ghana-flag.svg"
            :alt="match.away"
          />
          <img
            v-else-if="match.away === 'Иран'"
            src="@/images/flags/iran-flag.svg"
            :alt="match.away"
          />
          <img
            v-else-if="match.away === 'Япония'"
            src="@/images/flags/japan-flag.svg"
            :alt="match.away"
          />
          <img
            v-else-if="match.away === 'Мексико'"
            src="@/images/flags/mexico-flag.svg"
            :alt="match.away"
          />
          <img
            v-else-if="match.away === 'Мароко'"
            src="@/images/flags/morocco-flag.svg"
            :alt="match.away"
          />
          <img
            v-else-if="match.away === 'Нидерландия'"
            src="@/images/flags/netherlands-flag.svg"
            :alt="match.away"
          />
          <img
            v-else-if="match.away === 'Полша'"
            src="@/images/flags/poland-flag.svg"
            :alt="match.away"
          />
          <img
            v-else-if="match.away === 'Португалия'"
            src="@/images/flags/portugal-flag.svg"
            :alt="match.away"
          />
          <img
            v-else-if="match.away === 'Саудитска Арабия'"
            src="@/images/flags/saudi-arabia-flag.svg"
            :alt="match.away"
          />
          <img
            v-else-if="match.away === 'Сенегал'"
            src="@/images/flags/senegal-flag.svg"
            :alt="match.away"
          />
          <img
            v-else-if="match.away === 'Сърбия'"
            src="@/images/flags/serbia-flag.svg"
            :alt="match.away"
          />
          <img
            v-else-if="match.away === 'Южна Корея'"
            src="@/images/flags/south-korea-flag.svg"
            :alt="match.away"
          />
          <img
            v-else-if="match.away === 'Испания'"
            src="@/images/flags/spain-flag.svg"
            :alt="match.away"
          />
          <img
            v-else-if="match.away === 'Швейцария'"
            src="@/images/flags/switzerland-flag.svg"
            :alt="match.away"
          />
          <img
            v-else-if="match.away === 'Тунис'"
            src="@/images/flags/tunisia-flag.svg"
            :alt="match.away"
          />
          <img
            v-else-if="match.away === 'САЩ'"
            src="@/images/flags/united-states-flag.svg"
            :alt="match.away"
          />
          <img
            v-else-if="match.away === 'Уругвай'"
            src="@/images/flags/uruguay-flag.svg"
            :alt="match.away"
          />
          <img
            v-else-if="match.away === 'Уелс'"
            src="@/images/flags/wales-flag.svg"
            :alt="match.away"
          />
        </span>
        <span v-if="this.bet" class="label">Резултата от срещата ще бъде победа за {{match.away}}</span>
      </div>
      <div v-if="matchBet" :class="`bet-wrapper ${match.finished ? isBetTrue : ''}`"><span>{{showUserBet}}</span></div>
    </div>
    <div v-if="settingBet && !betMessage" class="message loader">
      <ellipsis-spinner></ellipsis-spinner>
    </div>
    <div v-if="settingBet && betMessage" class="message">
      <p>{{ betMessage }}</p>
    </div>
  </div>
</template>

<script>
import EllipsisSpinner from "@/components/loaders/EllipsisSpinner.vue";
export default {
  props: ["match", "bet", "isLive"],
  components: {
    EllipsisSpinner,
  },
  data() {
    return {
      flag: null,
      winner: null,
      settingBet: false,
      betMessage: null,
      minute: null,
      matchBet: this.match.bet
    };
  },
  computed: {
    showUserBet(){
      switch(this.matchBet){
        case '1': return `Победа за ${this.match.home}`;
        case '2': return `Победа за ${this.match.away}`;
        case 'X': return `Равен`;
      }
    },
    isBetTrue(){
      if(this.winner === null) return '';
      
      if(this.winner === 'home' && this.matchBet === '1') return 'correct';
      if(this.winner === 'away' && this.matchBet === '2') return 'correct';
      if(this.winner === 'draw' && this.matchBet === 'X') return 'correct';
      
      return 'wrong';
    },
    startHourPreset(){
      if(!this.match.startHour) return this.match.date;

      return `${this.match.date} / ${this.match.startHour}`;
    }
  },
  methods: {
    setWinner() {
      if (this.match.score === "-") {
        return (this.winner = null);
      } else {
        const goals = this.match.score.split("-");
        const homeGoals = +goals[0];
        const awayGoals = +goals[1];
        const result = homeGoals - awayGoals;

        if (result > 0) {
          return (this.winner = "home");
        } else if (result < 0) {
          return (this.winner = "away");
        } else {
          return (this.winner = "draw");
        }
      }
    },
    async setBet(type) {
      if (!this.bet) return false;
      const user = this.$store.getters["auth/user"];
      if (user === null) {
        return this.$router.push("/login");
      }

      this.settingBet = true;
      try {
        const responseData = await this.$store.dispatch("bets/setBet", {
          user,
          match: this.match,
          bet: type,
        });
        const isSaved =
          responseData[user.username][
            `${this.match.home}-${this.match.away}:${this.match.date}`
          ] === type;

        if (isSaved) {
          this.betMessage = "Прогнозата е запазена";
          this.matchBet = type;
        } else {
          this.betMessage =
            "Възникна неочаквана грешка. Моля, опитайте отново по-късно.";
        }
      } catch (error) {
        console.log(error);
      } finally {
        const t = setTimeout(() => {
          clearTimeout(t);
          this.betMessage = null;
          this.settingBet = false;
        }, 3500);
      }
    },
    setMinutes(){
      if(!this.isLive) return;

      const minute = this.match.minutes;
      if(Number.isNaN(+minute)) return this.minute = null;
      const n = minute.split("'")[0];
      this.minute = +n;

      const i = setInterval(() => {
        if(this.minute === null) return clearInterval(i)
        
        this.minute++;
      }, 60000);

      return this.minute;
    }
  },
  created() {
    this.setWinner();
    this.setMinutes();
  }
};
</script>

<style scoped>
.match {
    position: relative;
  margin-bottom: 48px;
}
.match.mb{
  margin-bottom: 85px;
}

.match.bet .flag,
.match.bet .score {
  cursor: pointer;
}


.match.bet .team .label,

.match.bet .score .label{
    position: absolute;
    bottom: 100%;
    left: 50%;
    min-width: 292px;
    transform: translateX(-50%);
    background: var(--color-scarlet);
    color: var(--color-light);
    text-align: center;
    border-radius: 8px;
    font-size: 14px;
    line-height: calc(1em + 6px);
    opacity: 0;
    visibility: hidden;
    transition: all .45s ease-out;
    padding: 8px 14px;
}
.match.bet .team .flag:hover ~ .label,
.match.bet .score:hover .label{
    opacity: 1;
    visibility: visible;
}
.match.bet .home-team .flag:hover,
.match.bet .home-team .flag:focus,
.match.bet .home-team .flag:active {
  transform: translateX(10px);
}
.match.bet .away-team .flag:hover,
.match.bet .away-team .flag:focus,
.match.bet .away-team .flag:active {
  transform: translateX(-10px);
}
.wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
.wrapper:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  height: calc(100% - 40px);
  width: 100%;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.02) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  z-index: -1;
}
.wrapper > div {
  flex-basis: 100%;
  max-width: 100%;
}
.wrapper > .score {
  max-width: 178px;
  flex-basis: 178px;
}
.team {
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
  line-height: calc(1em + 10px);
}

.team.winner,
.score.winner {
  font-weight: 600;
}
.flag {
  position: relative;
  height: 108px;
  width: 108px;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  background-color: var(--color-light);
  transition: all 0.45s ease-out;
}
.flag:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  height: calc(100% - 50px);
  width: calc(100% - 50px);
  transform: translate(-50%, -50%) rotate(45deg);
  border: 9px solid var(--color-light);
}
.flag img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.score {
  text-align: center;
}
.date {
  display: block;
  text-align: center;
}

.bet-wrapper{
  position: absolute;
  top: 100%;
  left: 50%;
  min-width: 292px;
  transform: translateX(-50%);
  background: rgba(28, 2, 12, 1);
  background: radial-gradient( circle, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0) 100% );
  color: var(--color-light);
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
  line-height: calc(1em + 6px);
  transition: all .45s ease-out;
  padding: 8px 14px;
}

.bet-wrapper.correct{
  background: var(--color-boat-blue);
}
.bet-wrapper.wrong{
  opacity: 0.7;
}

.message {
  position: fixed;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 15px;
  background: var(--color-scarlet);
  color: var(--color-light);
  display: inline-block;
  border-radius: 9px;
  z-index: 100;
}

.loader {
  position: absolute;
  padding: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-50% + 16px));
  width: 80px;
  height: 108px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.05);
  z-index: 100;
}

.msg-enter-from {
  opacity: 0;
  transform: translate(-50%, -30px);
}
.msg-leave-to {
  opacity: 0;
  transform: translate(-50%, -30px);
}
.msg-enter-active {
  transition: all 0.45s ease-out;
}
.msg-leave-active {
  transition: all 0.45s ease-in;
}
.msg-enter-to,
.msg-leave-from {
  opacity: 1;
  transform: translate(-50%, 0);
}
</style>
