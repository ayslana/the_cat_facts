import { shallowMount } from "@vue/test-utils";
import TitleBar from "@/components/TitleBar.vue";

describe("TitleBar", () => {
  test("renders correctly with title", () => {
    const title = "The Defsafe Cat Facts Page";
    const wrapper = shallowMount(TitleBar, {
      props: {
        title: title,
      },
    });

    expect(wrapper.find("p").text()).toBe(title);
  });
});
