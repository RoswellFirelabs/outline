import * as React from "react";
import { useTranslation } from "react-i18next";

export default function useDictionary() {
  const { t } = useTranslation();

  return React.useMemo(() => {
    return {
      addColumnAfter: t("Insert column after"),
      addColumnBefore: t("Insert column before"),
      addRowAfter: t("Insert row after"),
      addRowBefore: t("Insert row before"),
      alignCenter: t("Align center"),
      alignLeft: t("Align left"),
      alignRight: t("Align right"),
      bulletList: t("Bulleted list"),
      checkboxList: t("Todo list"),
      codeBlock: t("Code block"),
      codeCopied: t("Copied to clipboard"),
      codeInline: t("Code"),
      createLink: t("Create link"),
      createLinkError: t("Sorry, an error occurred creating the link"),
      createNewDoc: t("Create a new doc"),
      deleteColumn: t("Delete column"),
      deleteRow: t("Delete row"),
      deleteTable: t("Delete table"),
      deleteImage: t("Delete image"),
      downloadImage: t("Download image"),
      replaceImage: t("Replace image"),
      alignImageLeft: t("Float left"),
      alignImageRight: t("Float right"),
      alignImageDefault: t("Center large"),
      em: t("Italic"),
      embedInvalidLink: t("Sorry, that link won’t work for this embed type"),
      findOrCreateDoc: `${t("Find or create a doc")}…`,
      h1: t("Big heading"),
      h2: t("Medium heading"),
      h3: t("Small heading"),
      heading: t("Heading"),
      hr: t("Divider"),
      image: t("Image"),
      imageUploadError: t("Sorry, an error occurred uploading the image"),
      imageCaptionPlaceholder: t("Write a caption"),
      info: t("Info"),
      infoNotice: t("Info notice"),
      link: t("Link"),
      linkCopied: t("Link copied to clipboard"),
      mark: t("Highlight"),
      newLineEmpty: `${t("Type '/' to insert")}…`,
      newLineWithSlash: `${t("Keep typing to filter")}…`,
      noResults: t("No results"),
      openLink: t("Open link"),
      orderedList: t("Ordered list"),
      pageBreak: t("Page break"),
      pasteLink: `${t("Paste a link")}…`,
      pasteLinkWithTitle: (service: string) =>
        t("Paste a {{service}} link…", {
          service,
        }),
      placeholder: t("Placeholder"),
      quote: t("Quote"),
      removeLink: t("Remove link"),
      searchOrPasteLink: `${t("Search or paste a link")}…`,
      strikethrough: t("Strikethrough"),
      strong: t("Bold"),
      subheading: t("Subheading"),
      table: t("Table"),
      tip: t("Tip"),
      tipNotice: t("Tip notice"),
      warning: t("Warning"),
      warningNotice: t("Warning notice"),
    };
  }, [t]);
}

export type Dictionary = ReturnType<typeof useDictionary>;
