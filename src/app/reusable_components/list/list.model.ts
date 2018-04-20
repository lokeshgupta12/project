export class ListConfig {
	//dataSource : object[];
	//totalCount ?: number // Provide Only in case of serverInteraction is true
	columns : {
		field : string,
		title ?: string,
		notToDisplay ?:boolean,
		notToSort ?:boolean,
	}[];
	sortable ?: boolean; //(false)
	filterable ?: boolean; //(false)
	pageable ?: boolean | {
		pageSize ?: number, //optional(10)
		pageSizeOptions ?: number[], //optional([10,20,50])
		showFirstLastButtons ?: boolean //optional(true)
	}; //(false)	
	serverInteraction ?: boolean; //(false)
	actions ?: {
		title ?: string,
		edit ?: {
			editRec : Function,
			isDisable ?: boolean
		},
		delete ?: {
			deleteRec : Function,
			isDisable ?: boolean
		},
	};
	allowAdd ?: boolean | {
		tooltip ?: string,
		tooltipPosition ?: string, //optional('after')
		add ?: Function,
		isDisable ?: boolean
	}
}