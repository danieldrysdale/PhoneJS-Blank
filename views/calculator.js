var form_items = [
    {
        key: '',
        items: [
            { label: 'Date of Assessment', template: 'date_item' },
            { label: 'Whole person impairment %', template: 'number_item' }
        ]
    },
    {
        key: 'Impairment Scores',
        items: [
            { label: 'Pain', template: 'number_item' },
            { label: 'Suffering', template: 'number_item' },
            { label: 'Mobility', template: 'number_item' },
            { label: 'Social relationship', template: 'number_item' },
            { label: 'Recreation & leisure', template: 'number_item' },
            { label: 'Other loss', template: 'number_item' },
            { label: 'Loss of expectation of life', template: 'number_item' }
        ]
    },
    {
        key: 'Results',
        items: [
            { label: 'Section 24', template: 'result_item'  },
            { label: 'Section 27', template: 'result_item'   },
            { label: 'Grand total', template: 'result_item'   }
        ]
    }
];


MyApp.calculator = function (params) {
    var viewModel = {
//  Put the binding properties here
    };

    return viewModel;
};