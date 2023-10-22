import { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import EditableHeading from "../../../../components/LegacyEditableHeading/LegacyEditableHeading";

export const EditableHeadingDescription = () => {
  const component = useMemo(() => {
    return (
      <div>
        <EditableHeading value="Hello world" type={EditableHeading.types.h3} />
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Editable heading"
      href="/?path=/docs/inputs-editableheading--overview"
      description="An extension of Heading component, it allows built in editing capabilities."
    />
  );
};
