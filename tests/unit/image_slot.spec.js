import { mount } from "@vue/test-utils";
import ImageSlot from "@/components/ImageSlot.vue";

describe("ImageSlot", () => {
  it("renders image correctly when image prop is provided", () => {
    const imageSrc = "example.jpg";

    const wrapper = mount(ImageSlot, {
      props: {
        image: imageSrc,
      },
    });

    const imgElement = wrapper.find("img");
    expect(imgElement.exists()).toBe(true);
    expect(imgElement.attributes("src")).toBe(imageSrc);
    expect(imgElement.attributes("alt")).toBe("Image");
  });
});
