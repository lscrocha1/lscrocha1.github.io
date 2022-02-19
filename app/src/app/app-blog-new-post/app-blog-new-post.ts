import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'; 
// @ts-ignore
import List from '@editorjs/list';
// @ts-ignore
import Checklist from '@editorjs/checklist';
// @ts-ignore
import Quote from '@editorjs/quote';
import { BaseComponent } from '../base/base-component';

@Component({
    selector: 'app-blog-new-post',
    templateUrl: './app-blog-new-post.html',
    styleUrls: ['./app-blog-new-post.scss', '../../common.css']
})
export class AppBlogNewPost extends BaseComponent {
    constructor(
        private formBuilder: FormBuilder) {
        super();
    }

    editorPtId: string = 'div-pt-content-id';
    editorEnId: string = 'div-en-content-id';

    formNewPost = this.formBuilder.group({
        "enTitle": '',
        "ptTitle": '',
        "enDescription": '',
        "ptDescription": '',
        "imageDisplay": '',
        "enContent": '',
        "ptContent": ''
    });

    ngOnInit() {
        this.createEditorContainer(this.editorPtId);
        this.createEditorContainer(this.editorEnId);
    }

    createEditorContainer(editorId: string) {
        let _ = new EditorJS({
            holder: editorId,
            tools: {
                header: {
                    class: Header as any,
                    inlineToolbar: true
                },
                quote: {
                    class: Quote,
                    inlineToolbar: true
                },
                list: {
                    class: List,
                    inlineToolbar: true
                },
                checklist: {
                    class: Checklist,
                    inlineToolbar: true
                }
            }
            //data: {}
        });
    }
}