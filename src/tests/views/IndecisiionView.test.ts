import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import IndecisionView from '@/views/indecisionView.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

const mockChatMessages = {
  template: '<div data-testid="mock-messages">Mock ChatMessages</div>',
};

describe('<IndecisionView />', () => {
  test('renders chat messages and messagebox correctly', () => {
    const wrapper = mount(IndecisionView);

    expect(wrapper.html()).toMatchSnapshot();

    expect(wrapper.findComponent(ChatMessages).exists()).toBe(true);
    expect(wrapper.findComponent(MessageBox).exists()).toBe(true);
  });

  test('calls onMessage when sending a message', async () => {
    const wrapper = mount(IndecisionView, {
      global: {
        stubs: {
          ChatMessages: mockChatMessages,
        },
      },
    });

    // Simulate the custom event
    const messageboxComponent = wrapper.findComponent(MessageBox);

    messageboxComponent.vm.$emit('sendMessage', 'Hola Mundo');

    await new Promise((r) => setTimeout(r, 150));

    expect(wrapper.html()).toMatchSnapshot();
  });
});
