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
import { PostDisplayTypeEnum } from '../base/types';
import appBlogService from '../app-blog/app-blog-service';
// @ts-ignore
import InlineCode from '@editorjs/inline-code';
// @ts-ignore
import CodeTool from '@editorjs/code';
// @ts-ignore
import ImageTool from '@editorjs/image';
import env from '../env/env';

@Component({
    selector: 'app-blog-new-post',
    templateUrl: './app-blog-new-post.html',
    styleUrls: ['./app-blog-new-post.scss', '../../common.css']
})
export class AppBlogNewPost extends BaseComponent {
    constructor(
        private formBuilder: FormBuilder) {
        super();
        this.editorPt = null as any;
        this.editorEn = null as any;
    }

    editorPt: EditorJS;
    editorEn: EditorJS;
    editorPtId: string = 'div-pt-content-id';
    editorEnId: string = 'div-en-content-id';
    displayType: PostDisplayTypeEnum = PostDisplayTypeEnum.Youtube;

    formNewPost = this.formBuilder.group({
        "enTitle": '',
        "ptTitle": '',
        "enDescription": '',
        "ptDescription": '',
        "imageDisplay": '',
        "enContent": '',
        "ptContent": '',
        "displayType": 1,
        'display': '',
        'tags': ''
    });

    ngOnInit() {
        this.createEditorContainer();
    }

    displayTypeChange() {
        this.displayType = this.formNewPost.controls['displayType'].value;
    }

    fileChange() {
        let input = window.document.getElementById('display') as HTMLInputElement;

        this.formNewPost.controls['display'].setValue(input.files![0]!);
    }

    async save() {
        let formData = new FormData();

        if (this.displayType == PostDisplayTypeEnum.Image)
            formData.append('file', this.formNewPost.controls['display'].value);
        else
            formData.append('display', this.formNewPost.controls['display'].value);

        formData.append('displayType', this.displayType.toString());
        formData.append('tags', this.formNewPost.controls['tags'].value);

        formData.append('ptTitle', this.formNewPost.controls['ptTitle'].value);
        formData.append('ptDescription', this.formNewPost.controls['ptDescription'].value);
        formData.append('ptBody', JSON.stringify(await this.editorPt.save()));

        formData.append('enTitle', this.formNewPost.controls['enTitle'].value);
        formData.append('enDescription', this.formNewPost.controls['enDescription'].value);
        formData.append('enBody', JSON.stringify(await this.editorEn.save()));

        await appBlogService.createPost(formData);
    }

    createEditorContainer() {
        this.editorPt = new EditorJS({
            holder: this.editorPtId,
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
                },               
                inlineCode: {
                    class: InlineCode,
                    inlineToolbar: true
                },
                code: {
                    class: CodeTool,
                    inlineToolbar: true
                }, 
                image: {
                    class: ImageTool,
                    inlineToolbar: true,
                    config: {
                        uploader: {
                            async uploadByFile(file: File) {
                                let formData = new FormData();

                                formData.append('file', file);

                                let result = await appBlogService.saveImage(formData);

                                return {
                                    success: 1,
                                    file: {
                                        url: `${env.imageUrl}${result}`
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });

        this.editorEn = new EditorJS({
            holder: this.editorEnId,
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
                },               
                inlineCode: {
                    class: InlineCode,
                    inlineToolbar: true
                },
                code: {
                    class: CodeTool,
                    inlineToolbar: true
                }, 
                image: {
                    class: ImageTool,
                    inlineToolbar: true,
                    config: {
                        uploader: {
                            async uploadByFile(file: File) {
                                let formData = new FormData();

                                formData.append('file', file);

                                let result = await appBlogService.saveImage(formData);

                                return {
                                    success: 1,
                                    file: {
                                        url: `${env.imageUrl}${result}`
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
    }
}