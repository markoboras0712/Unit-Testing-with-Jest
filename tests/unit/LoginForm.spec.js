import LoginForm from "@/components/LoginForm.vue";
import { mount } from "@vue/test-utils";

describe("LoginForm", () => {
  it("emits an event with a user data payload", () => {
    const wrapper = mount(LoginForm);
    // 1. Find text input
    const input = wrapper.find('input[type="text"]');
    //for <input data-testid="name-input" type="text" v-model="data">
    //use wrapper.find('[data-testid="name-input"]')

    // 2. Set value for text input
    input.setValue("Marko Boras");
    // 3. Simulate form submission
    wrapper.trigger("submit");
    // 4. Assert event has been emitted
    const formSubmittedCalls = wrapper.emitted("formSubmitted");
    expect(formSubmittedCalls).toHaveLength(1);
    // 5. Assert payload is correct
    const expectedPayload = { name: "Marko Boras" };
    expect(wrapper.emitted("formSubmitted")[0][0]).toMatchObject(
      expectedPayload
    );
    //[0][0] because we get [[{name : 'Marko Boras'}]]
  });
});
