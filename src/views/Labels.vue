<template>
    <Layout>
        <MyIcon/>
        <div class="tags">
            <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`">
                <span>{{tag.name}}</span>
                <icon name="right"/>
            </router-link>

        </div>
        <div class="createTag-wrapper">
            <Button @click="createTag">新建标签</Button>
        </div>
    </Layout>
</template>

<script lang="ts">
  import {Component} from 'vue-property-decorator';
  import Button from '@/components/Button.vue';
  import {mixins} from 'vue-class-component';
  import TagHelper from '@/mixins/TagHelper';
  import MyIcon from '@/views/MyIcon.vue';


  @Component({
    components: {MyIcon, Button},
  })
  export default class Labels extends mixins(TagHelper) {
    get tags() {
      return this.$store.state.tagList;
    }

    created() {
      this.$store.commit('fetchTags');
    }


  }
</script>

<style lang="scss" scoped>
    .tags {
        background: white;
        font-size: 16px;
        padding-left: 16px;

        > .tag {
            min-height: 44px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #e6e6e6;

            svg {
                color: #666;
                width: 18px;
                height: 18px;
                margin-right: 16px;
            }
        }
    }


</style>