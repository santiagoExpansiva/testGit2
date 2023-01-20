class _100167_apiteste extends l2_html.Base {

	// Copyright multilevelstudio.com, or its affiliates. All Rights Reserved.
	// SPDX-License-Identifier: MIT-0

	public render(): HTMLElement {

		super.createEL('teste'); // create this.el
		l2_fieldTypes.renderAllFields(this.el, this);
		return this.el;

	}

	// 3 - Search Page

	public static readonly _SearchDetails: l2_html.SearchType = {
		section: l2_html.PCategories.dataManagement,
		group: 'js',
		desc: 'description here',
		tags: ['l2'],
		childrenTags: ['!'],
		examples: [
		]
	}

}