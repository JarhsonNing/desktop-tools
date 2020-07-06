<template>
  <div class="neteasy-search">
    <div class="header">
      <md-toolbar class="md-accent">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="$router.go(-1)">
              <i class="fa fa-arrow-left"></i>
            </md-button>
          </div>

          <md-autocomplete
            v-model="searchValue"
            :md-options="suggest"
            @md-changed="handleValueChanged"
          >
            <label><i class="fa fa-search">搜索</i></label>
            <template #md-autocomplete-item="{item}">
              {{ item.name }}
            </template>
          </md-autocomplete>
        </div>
      </md-toolbar>
      <md-progress-bar
        v-if="showLoading"
        class="md-accent"
        md-mode="indeterminate"
      ></md-progress-bar>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'playerNeteasySearch',
    data() {
      return {
        searchValue: '',
        suggest: [],
        showLoading: false
      }
    },
    methods: {
      handleValueChanged(val) {
        console.log(val)
        this.suggest = [{ name: val }]
        this.countries = new Promise(resolve => {
          setTimeout(() => {
            if (!searchTerm) {
              resolve(this.countryList)
            } else {
              const term = searchTerm.toLowerCase()

              resolve(this.countryList.filter(({ name }) => name.toLowerCase().includes(term)))
            }
          }, 500)
        })
      }
    }
  }
</script>
