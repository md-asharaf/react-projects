import React from "react";
import { Controller } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";
function RTE({ name, control, label, defaultValue = "" }) {
    return (
        <div children="w-full">
            {label && <label className="inline-block mb-1 pl-1">{label}</label>}
            <Controller
                name={name || "content"}
                control={control}
                rules={{ required: true }}
                render={({ field: { onchange } }) => (
                    <Editor
                        apiKey="z2szm6j9vut0jvzu4x18u2588xzqkneezbk678s159ufrbic"
                        init={{
                            height: 500,
                            menubar: true,
                            plugins:
                                "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss",
                            toolbar:
                                "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                            content_style:
                                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                        }}
                        initialValue={defaultValue}
                        onEditorChange={onchange}
                    />
                )}
            />
        </div>
    );
}

export default RTE;
