import AppHeader from "@/components/AppHeader";
import { mount } from "@vue/test-utils";

describe("AppHeader", () => {
  test("if user is not logged in , do not show logout button", () => {
    const wrapper = mount(AppHeader); // mount component

    expect(wrapper.find("button").isVisible()).toBe(false);
  });
  test("if a user is logged in, show logout button", async () => {
    const wrapper = mount(AppHeader); // mount component
    await wrapper.setData({ loggedIn: true }); // setting data value

    expect(wrapper.find("button").isVisible()).toBe(true);
  });
});
