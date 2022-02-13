import { Component } from '@angular/core';
import { BaseComponent } from '../base/base-component';
import { ActivatedRoute } from '@angular/router';
import appBlogService from '../app-blog/app-blog-service';
import { PostDto } from '../base/types';
import { formatDate } from '../base/util';
import EditorJS from '@editorjs/editorjs';

@Component({
    selector: 'app-blog-detail',
    templateUrl: './app-blog-detail.html',
    styleUrls: ['./app-blog-detail.scss', '../../common.css']
})
export class AppBlogDetail extends BaseComponent {
    post: PostDto = {
        comments: [],
        content: '',
        createdAt: '2022-01-01',
        description: '',
        id: 0,
        imageDisplay: '',
        images: [],
        tags: [],
        title: '',
        updatedAt: ''
    };

    editorId: string = 'div-content-id';

    constructor(private route: ActivatedRoute) {
        super();
    }

    formatDate(date: string) {
        return formatDate(date);
    }

    ngOnInit() {
        this.loadPost();
    }

    loadContent() {
        let _ = new EditorJS({
            holder: this.editorId,
            readOnly: true,            
            data: {
                "time": 1644789029140,
                "blocks": [
                    {
                        "id": "MmtTaPYMfv",
                        "type": "header",
                        "data": {
                            "text": "Editor.js",
                            "level": 2
                        }
                    },
                    {
                        "id": "_Kf94n2z_H",
                        "type": "paragraph",
                        "data": {
                            "text": "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."
                        }
                    },
                    {
                        "id": "2DAK_GxWIz",
                        "type": "header",
                        "data": {
                            "text": "Key features",
                            "level": 3
                        }
                    },
                    {
                        "id": "O0SxNO00hZ",
                        "type": "list",
                        "data": {
                            "style": "unordered",
                            "items": [
                                "It is a block-styled editor",
                                "It returns clean data output in JSON",
                                "Designed to be extendable and pluggable with a simple API"
                            ]
                        }
                    },
                    {
                        "id": "USg2zJ9NZn",
                        "type": "header",
                        "data": {
                            "text": "What does it mean «block-styled editor»",
                            "level": 3
                        }
                    },
                    {
                        "id": "g1iUGlnViB",
                        "type": "paragraph",
                        "data": {
                            "text": "Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class=\"cdx-marker\">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor's Core."
                        }
                    },
                    {
                        "id": "gLkeH9QB0S",
                        "type": "paragraph",
                        "data": {
                            "text": "There are dozens of <a href=\"https://github.com/editor-js\">ready-to-use Blocks</a> and the <a href=\"https://editorjs.io/creating-a-block-tool\">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games."
                        }
                    },
                    {
                        "id": "rmfczZe40T",
                        "type": "header",
                        "data": {
                            "text": "What does it mean clean data output",
                            "level": 3
                        }
                    },
                    {
                        "id": "0xA0vKZ2AF",
                        "type": "paragraph",
                        "data": {
                            "text": "Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below"
                        }
                    },
                    {
                        "id": "FyJfXTFa-k",
                        "type": "paragraph",
                        "data": {
                            "text": "Given data can be used as you want: render with HTML for <code class=\"inline-code\">Web clients</code>, render natively for <code class=\"inline-code\">mobile apps</code>, create markup for <code class=\"inline-code\">Facebook Instant Articles</code> or <code class=\"inline-code\">Google AMP</code>, generate an <code class=\"inline-code\">audio version</code> and so on."
                        }
                    },
                    {
                        "id": "KhYtXj0HuN",
                        "type": "paragraph",
                        "data": {
                            "text": "Clean data is useful to sanitize, validate and process on the backend."
                        }
                    },
                    {
                        "id": "md_viTzLYH",
                        "type": "delimiter",
                        "data": {}
                    },
                    {
                        "id": "SA_-tDSeGy",
                        "type": "paragraph",
                        "data": {
                            "text": "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏"
                        }
                    },
                    {
                        "id": "sy1NxkOcWb",
                        "type": "image",
                        "data": {
                            "file": {
                                "url": "https://codex.so/public/app/img/external/codex2x.png"
                            },
                            "caption": "",
                            "withBorder": false,
                            "stretched": false,
                            "withBackground": false
                        }
                    }
                ],
                "version": "2.23.1"
            }
        });
    }

    async loadPost() {
        let id = this.route.snapshot.paramMap.get('id');

        if (!id)
            return; // redirect to 404

        this.post = await appBlogService.getPost(id);

        this.loadContent();
    }
}