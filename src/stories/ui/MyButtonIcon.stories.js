import { MyButtonIcon } from '@/core/components/base/button-icon'
import { MyIcon } from '@/core/components/base/icon'
import { icons } from '../assets/iconList.js'
import { types as typeList } from '../assets/typeList'

const storyConfig = {
  title: 'UI Components/MyButtonIcon',
  component: MyButtonIcon,
  //👇 Creates specific argTypes
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: typeList,
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['large', 'medium', 'small', 'mini'],
      },
    },
    gap: {
      control: {
        type: 'number',
      },
    },
    postfix: {
      control: {
        type: 'boolean',
      },
    },
    square: {
      control: {
        type: 'boolean',
      },
    },
    round: {
      control: {
        type: 'boolean',
      },
    },
    icon: {
      control: false,
    },
  },
}

export default storyConfig

export const tryAllOptions = (args, { argTypes }) => ({
  components: { MyButtonIcon, MyIcon },
  props: Object.keys(argTypes),
  data() {
    return {
      icons,
    }
  },
  template: `
    <div class="text-center">
      <div v-for="icon in icons">
        <my-button-icon v-bind="$props" v-bind:icon="icon">
          My cool {{ icon }} button
        </my-button-icon>
        <div class="my-3" />
      </div>
    </div>
  `,
})
