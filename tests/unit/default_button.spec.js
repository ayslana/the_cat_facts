import { mount } from "@vue/test-utils";
import DefaultButton from "@/components/DefaultButton.vue";

describe("DefaultButton", () => {
  it("renders correctly with default props", () => {
    const wrapper = mount(DefaultButton);
    expect(wrapper.attributes("disabled")).toBeUndefined();
  });

  it("emits click event when clicked", async () => {
    const wrapper = mount(DefaultButton);
    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toHaveLength(1);
  });

  it("renders label text when label prop is provided", () => {
    const label = "Click me";
    const wrapper = mount(DefaultButton, {
      props: {
        label,
      },
    });
    expect(wrapper.text()).toContain(label);
  });
});
