import { Component, h } from '@stencil/core';

@Component({
	tag: 'app-home',
	styleUrl: 'app-home.scss'
})
export class AppHome {
	render() {
		return [
			<div class="components">
				<app-profile></app-profile>
				<div class="components-pages">
					<app-about-me></app-about-me>
					<app-experiences></app-experiences>
					<app-contact></app-contact>
					<app-footer></app-footer>
				</div>
			</div>
		];
	}
}
