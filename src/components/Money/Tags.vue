<template>
    <div class="tags">
        <div class="new">
            <button @click="create">新增标签</button>
        </div>
        <ul class="current">
            <li v-for="tag in tagList" :key="tag.id"
                :class="selectedTags.indexOf(tag)>=0 &&'selected'"
                @click="toggle(tag)">{{tag.name}}
            </li>

        </ul>

    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component,} from 'vue-property-decorator';

  @Component
  export default class Tags extends Vue {
    selectedTags: Tag[] = [];

    get tagList() {
      return this.$store.state.tagList;
    }

    created() {
      this.$store.commit('fetchTags');
    }

    toggle(tag: Tag) {
      const index = this.selectedTags.indexOf(tag);
      if (index >= 0) {
        this.selectedTags.splice(index, 1);
      } else {this.selectedTags.push(tag);}
      this.$emit('update:value', this.selectedTags);
    }

    create() {
      const name = window.prompt('请输入标签名');
      if (!name) {
        return;
      }
      this.$store.commit('createTag', name);
    }
  }
</script>

<style lang="scss" scoped>
    .tags {
        background: white;
        flex-grow: 1;
        font-size: 14px;
        padding: 16px;
        display: flex;
        flex-direction: column-reverse;

        > .current {
            display: flex;
            flex-wrap: wrap;

            > li {
                $bg: #d9d9d9;
                background: $bg;
                height: 24px;
                line-height: 24px;
                border-radius: 12px;
                padding: 0 16px;
                margin-top: 4px;
                &:not(:last-child){
                    margin-right: 10.7px;
                }

                &.selected {
                    background: darken($bg, 50%);
                }

            }
        }

        > .new {
            padding-top: 16px;

            button {
                background: transparent;
                border: none;
                color: #999;
                border-bottom: 1px solid;
                padding: 0 4px;
            }
        }
    }
</style>