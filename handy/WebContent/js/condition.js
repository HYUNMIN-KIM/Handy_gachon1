var chart = AmCharts.makeChart("condition_detail", {
	
	"type" : "serial",
	"categoryField" : "category",
	"dataDateFormat" : "YYYY-MM-DD",
	"startDuration" : 5,
	"categoryAxis" : {
		"gridPosition" : "start",
		"parseDates" : true
	},
	"chartCursor" : {
		"enabled" : true
	},
	"chartScrollbar" : {
		"enabled" : true
	},
	"trendLines" : [],
	"graphs" : [ {
		"fillAlphas" : 1,
		"id" : "AmGraph-1",
		"title" : "graph",
		"type" : "column",
		"valueField" : "column-1"
	} ],
	"guides" : [],
	"valueAxes" : [ {
		"id" : "ValueAxis-1",
		"title" : "Condition index"
	} ],
	"allLabels" : [],
	"balloon" : {},

	// Select graph
	"legend" : {
		"enabled" : true,
		"useGraphSettings" : true
	},
	"titles" : [ {
		"id" : "Title-1",
		"size" : 20,
		"text" : "Smart Inner Wear"
	} ],
	"dataProvider" : [
	// 2014-01
	{
		"category" : "2014-01-01",
		"column-1" : 8,
	//"column-2": 5
	}, {
		"category" : "2014-01-02",
		"column-1" : 6,
	//"column-2": 7
	}, {
		"category" : "2014-01-03",
		"column-1" : 2,
	//"column-2": 3
	}, {
		"category" : "2014-01-04",
		"column-1" : 1,
	//"column-2": 3
	}, {
		"category" : "2014-01-05",
		"column-1" : 2,
	//"column-2": 1
	}, {
		"category" : "2014-01-06",
		"column-1" : 3,
	//"column-2": 2
	}, {
		"category" : "2014-01-07",
		"column-1" : 6,
	//"column-2": 8
	},

	// 2014-02
	{
		"category" : "2014-02-01",
		"column-1" : 5,
	//"column-2": 5
	}, {
		"category" : "2014-02-02",
		"column-1" : 6,
	//"column-2": 8
	}, {
		"category" : "2014-02-03",
		"column-1" : 5,
	//"column-2": 2
	}, {
		"category" : "2014-02-04",
		"column-1" : 1,
	//"column-2": 6
	}, {
		"category" : "2014-02-05",
		"column-1" : 6,
	//"column-2": 8
	}, {
		"category" : "2014-02-06",
		"column-1" : 5,
	//"column-2": 8
	}, {
		"category" : "2014-02-07",
		"column-1" : 6,
	//"column-2": 5
	},

	// 2015-01
	{
		"category" : "2015-01-01",
		"column-1" : "4",
	//"column-2": "4"
	}, {
		"category" : "2015-01-02",
		"column-1" : "5",
	//"column-2": "3"
	}, {
		"category" : "2015-01-03",
		"column-1" : "4",
	//"column-2": "5"
	}, {
		"category" : "2015-01-04",
		"column-1" : "3",
	//"column-2": "5"
	}, {
		"category" : "2015-01-05",
		"column-1" : 6,
	//"column-2": 4
	}, {
		"category" : "2015-01-06",
		"column-1" : 3,
	//"column-2": 2
	}, {
		"category" : "2015-01-07",
		"column-1" : 3,
	//"column-2": 6
	},

	// 2015-02
	{
		"category" : "2015-02-01",
		"column-1" : 3,
	//"column-2": 2
	}, {
		"category" : "2015-02-02",
		"column-1" : 4,
	//"column-2": 4
	}, {
		"category" : "2015-02-03",
		"column-1" : 3,
	//"column-2": 2
	}, {
		"category" : "2015-02-04",
		"column-1" : 2,
	//"column-2": 6
	}, {
		"category" : "2015-02-05",
		"column-1" : 3,
	//"column-2": 1
	}, {
		"category" : "2015-02-06",
		"column-1" : 6,
	//"column-2": 7
	}, {
		"category" : "2015-02-07",
		"column-1" : 2,
	//"column-2": 3
	},

	// 2016-01
	{
		"category" : "2016-01-01",
		"column-1" : "2",
	//"column-2": "5"
	}, {
		"category" : "2016-01-02",
		"column-1" : "4",
	//"column-2": "5"
	}, {
		"category" : "2016-01-03",
		"column-1" : "6",
	//"column-2": "4"
	}, {
		"category" : "2016-01-04",
		"column-1" : "7",
	//"column-2": "3"
	}, {
		"category" : "2016-01-05",
		"column-1" : 3,
	//"column-2": 1
	}, {
		"category" : "2016-01-06",
		"column-1" : 6,
	//"column-2": 7
	}, {
		"category" : "2016-01-07",
		"column-1" : 2,
	//"column-2": 3
	},

	// 2016-02
	{
		"category" : "2016-02-01",
		"column-1" : "2",
	//"column-2": "2"
	}, {
		"category" : "2016-02-02",
		"column-1" : "3",
	//"column-2": "4"
	}, {
		"category" : "2016-02-03",
		"column-1" : "5",
	//"column-2": "3"
	}, {
		"category" : "2016-02-04",
		"column-1" : "6",
	//"column-2": "4"
	}, {
		"category" : "2016-02-05",
		"column-1" : 1,
	//"column-2": 2
	}, {
		"category" : "2016-02-06",
		"column-1" : 8,
	//"column-2": 5
	}, {
		"category" : "2016-02-07",
		"column-1" : 3,
	//"column-2": 7
	} ]
});