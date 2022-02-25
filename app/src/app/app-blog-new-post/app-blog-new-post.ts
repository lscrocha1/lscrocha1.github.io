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
import { PostContentLanguageEnum, PostDisplayTypeEnum } from '../base/types';
import appBlogService from '../app-blog/app-blog-service';
// @ts-ignore
import InlineCode from '@editorjs/inline-code';
// @ts-ignore
import CodeTool from '@editorjs/code';
// @ts-ignore
import ImageTool from '@editorjs/image';
import env from '../env/env';
import { DataService } from '../base/data-service';

@Component({
    selector: 'app-blog-new-post',
    templateUrl: './app-blog-new-post.html',
    styleUrls: ['./app-blog-new-post.scss', '../../common.css']
})
export class AppBlogNewPost extends BaseComponent {
    constructor(
        private formBuilder: FormBuilder,
        private dataService: DataService) {
        super();
        this.editorPt = null as any;
        this.editorEn = null as any;
    }

    editorPt: EditorJS;
    editorEn: EditorJS;
    editorPtId: string = 'div-pt-content-id';
    editorEnId: string = 'div-en-content-id';
    displayType: PostDisplayTypeEnum = PostDisplayTypeEnum.Youtube;
    editing: boolean = false;
    initialPtContent: any;
    initialEnContent: any;
    postId: string = "";

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
        if (location.href.indexOf("/blog/edit") > 0) {
            let post = this.dataService.getPost();

            if (!post)
                return;

            this.postId = post.id;

            let enContent = post.contents.find(e => e.language == PostContentLanguageEnum.English);
            let ptContent = post.contents.find(e => e.language == PostContentLanguageEnum.Portuguese);

            this.initialEnContent = enContent?.body;
            this.initialPtContent = ptContent?.body;

            this.formNewPost.controls['enTitle'].setValue(enContent?.title);
            this.formNewPost.controls['enDescription'].setValue(enContent?.description);

            this.formNewPost.controls['ptTitle'].setValue(ptContent?.title);
            this.formNewPost.controls['ptDescription'].setValue(ptContent?.description);
            this.formNewPost.controls['displayType'].setValue(post.displayType);

            this.displayType = post.displayType;

            let tags = post.tags.map(e => e.name).join(';');

            this.formNewPost.controls['tags'].setValue(tags);

            this.editing = true;
        }

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
        formData.append('id', this.postId);
        
        if (!this.editing)
            await appBlogService.createPost(formData);
        else
            await appBlogService.editPost(formData);

        alert('saved');
    }

    createEditorContainer() {
        this.editorPt = this.getEditor(this.editorPtId, this.initialPtContent);
        this.editorEn = this.getEditor(this.editorEnId, this.initialEnContent);
    }

    getEditor(id: string, data: any) {
        return new EditorJS({
            holder: id,
            data: !!data ? JSON.parse(data) : null,
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