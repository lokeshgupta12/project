export class ListConfig {
	//[config]:ListConfig
	//[dataSource] : object[];
	//[totalCount] ?: number // Provide Only in case of serverInteraction is true
	//(initialized) ?: Function
	//(onSelect) ?: Function
	columns : {
		field : string,
		title ?: string,
		notToDisplay ?:boolean,
		notToSort ?:boolean,
	}[];
	selectable ?: boolean; //(false)
	showLoadingProgress ?: boolean; //(false)
	sortable ?: boolean; //(false)
	filterable ?: boolean; //(false)
	pageable ?: boolean | {
		pageSize ?: number, //optional(10)
		pageSizeOptions ?: number[], //optional([10,20,50])
		showFirstLastButtons ?: boolean //optional(true)
	}; //(false)	
	serverInteraction ?: boolean; //(false)
	actions ?: {
		title ?: string, //(Action)
		edit ?: {
			editRec : Function,
			isDisable ?: boolean //(false)
		},
		delete ?: {
			deleteRec : Function,
			isDisable ?: boolean //(false)
		},
	};
	allowAdd ?: boolean | {
		tooltip ?: string, // (Add Record)
		tooltipPosition ?: string, //optional('after')
		add ?: Function,
		isDisable ?: boolean //(false)
	};
}