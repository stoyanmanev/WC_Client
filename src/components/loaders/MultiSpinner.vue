<template>
    <div class="multi-spinner-container">
      <div class="multi-spinner">
        <div class="multi-spinner">
          <div class="multi-spinner">
            <div class="multi-spinner">
              <div class="multi-spinner">
                <div class="multi-spinner">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.multi-spinner-container {
  height: 90px;
  width: 90px;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
}

.multi-spinner {
  position: absolute;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  border: 5px solid transparent;
  border-top-color: var(--color-light);
  border-radius: 50%;
  -webkit-animation: spin 5s cubic-bezier(0.17, 0.49, 0.96, 0.76) infinite;
  animation: spin 5s cubic-bezier(0.17, 0.49, 0.96, 0.76) infinite;
}

@keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>