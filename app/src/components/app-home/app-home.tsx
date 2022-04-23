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
					<app-experiences></app-experiences>
					<app-about-me></app-about-me>
					<app-contact></app-contact>
					<app-footer></app-footer>
				</div>
			</div>
		];
	}
}
