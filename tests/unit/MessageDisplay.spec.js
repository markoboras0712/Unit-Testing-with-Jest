import MessageDisplay from "@/components/MessageDisplay";
import { mount } from "@vue/test-utils";
import { getMessage } from "@/services/axios";
import flushPromises from "flush-promises";

jest.mock("@/services/axios");

beforeEach(() => {
  jest.clearAllMocks();
});

describe("MessageDisplay", () => {
  it("Calls getMessage once and displays message", async () => {
    const mockMessage = "Hello from the db";
    getMessage.mockResolvedValueOnce({ text: mockMessage }); //mock the API call
    const wrapper = mount(MessageDisplay);
    //wait for promise to resolve
    await flushPromises();
    //check that call happened once
    expect(getMessage).toHaveBeenCalledTimes(1);
    //check that component displays message
    const message = wrapper.find('[data-testid="message"]').text();
    expect(message).toEqual(mockMessage);
  });

  it("Displays an error when getMessage call fails", async () => {
    //mock the failed API
    const mockError = "Oops! Something went wrong.";
    getMessage.mockRejectedValueOnce(mockError);
    const wrapper = mount(MessageDisplay);
    //wait for promise to resolve
    await flushPromises();
    //check that call happened once
    expect(getMessage).toHaveBeenCalledTimes(1);
    //check that component displays error
    const displayedError = wrapper.find('[data-testid="message-error"]').text();
    expect(displayedError).toEqual(mockError);
  });
});
