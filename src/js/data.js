
module.exports.factor = {
        // Индексы перевода в текущие цены.
        indexesInCurrentPrices: {
            compensation: 7.89,
            operationOfMachines: 3.81,
            materials: 4.4,
        },
        
        // Коэффициенты к накладным расходам и сметной прибыли.
        overheadCostAndEstimatedProfitCoefficient: {
            overheadCost: 0.85,
            estimatedProfit: 0.8
        },
        //overheadCostCoefficient: 0.85,
        //estimatedProfitCoefficient: 0.8,
        // Коэффициенты к итогам.
        coefficients: [ 
            {
                sections: ["iibiixt5", "iibi4v4h"],
                name: "тестовй коэффициент к смете 1",
                directCosts: 1,
                compensation: 0.9,
                operationOfMachines: {
                    unitValue: 0.8,
                    compensation: 0.7
                },
                materials: 0.6,
            },
            {
                sections: ["iibiixt5"],
                name: "тестовй коэффициент к смете 2",
                directCosts: 1,
                compensation: 0.9,
                operationOfMachines: {
                    unitValue: 0.8,
                    compensation: 0.7
                },
                materials: 0.6,
            }
            
        ],
        
        // Налоги.
        tax: [
            {
                name: "Ндс",
                taxPercent: 18
            }
        ],
		nds: 18
};
 			
module.exports.estimate = [ 
    {
        id: "iibiixt5",
        name:'Раздел 1. Демонтаж ВОК', 
        prices: [ 
            {
                substantiation: "ТЕРм10-06-033-28",
                name: "Вытягивание кабеля из канализации, масса 1 м кабеля, кг, до 6", 
                unitOfMeasure: "км",
                quantity: 1.265,
                unitValue: {
                    compensation: 998.64,
                    operationOfMachines: {
                        unitValue: 4966.83,
                        compensation: 238.03
                    },
                    materials: 0,
                },
                coefficients: [
                    {
                        name: "тестовй коэффициент 1",
                        directCosts: 1,
                        compensation: 0.9,
                        operationOfMachines: {
                            unitValue: 0.8,
                            compensation: 0.7
                        },
                        materials: 0.6,
                    },
                    {
                        name: "тестовй коэффициент 2",
                        directCosts: 0.9,
                        compensation: 1,
                        operationOfMachines: {
                            unitValue: 1,
                            compensation: 1
                        },
                        materials: 1,
                    }
                    
                ],
                factor: {
                    compensation: 1,
                    operationOfMachines: 1,
                    materials: 1,
                },
                overheadCostPercent: 100,
                estimatedProfitPercent: 65,
            }
        ],
    },
    {
        id: "iibi4v4h",
        name: 'Раздел 2. Монтаж ВОК', 
        prices:[ 
            {
                substantiation: "ТЕРм10-06-048-06",
                name: "Прокладка волоконно-оптических кабелей в канализации в трубопроводе по занятому каналу", 
                unitOfMeasure: "100 м кабеля",
                quantity: 13.15,
                unitValue: {
                    compensation: 294,
                    operationOfMachines: {
                        unitValue: 424.48,
                        compensation: 44.73
                    },
                    materials: 8.05,
                },
                overheadCostPercent: 100,
                estimatedProfitPercent: 65,
            },
            {
                substantiation: "ТЕРм10-06-051-04",
                name: "Муфты прямые с учетом измерений рефлектометром в процессе монтажа на кабеле ГТС в колодце с числом волокон 16", 
                unitOfMeasure: "шт.",
                quantity: 2,
                unitValue: {
                    compensation: 1304.98,
                    operationOfMachines: {
                        unitValue: 26352.98,
                        compensation: 1117.79
                    },
                    materials: 901.3,
                },
                overheadCostPercent: 100,
                estimatedProfitPercent: 65,
            },
            {
                substantiation: "ТЕРм10-06-054-04",
                name: 'Измерение на смонтированном участке волоконно-оптического кабеля ГТС в одном направлении с числом волокон 16 (кросс АМТС - кросс ОАО "Ростелеком")', 
                unitOfMeasure: "участок",
                quantity: 2,
                unitValue: {
                    compensation: 624.92,
                    operationOfMachines: {
                        unitValue: 26352.98,
                        compensation: 1117.79
                    },
                    materials: 901.3,
                },
                overheadCostPercent: 100,
                estimatedProfitPercent: 65,
            }
        ]
    }
    
];


