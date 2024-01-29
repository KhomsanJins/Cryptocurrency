import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';

Chart.register(ArcElement);
const labels = [
    'section 1',
    'section 2',
    'section 3',
    'section 4',
    'section 5',
    'section 6'
];
const data = {
    labels: labels,
    datasets: [
        {
            label: 'Doughnut chart',
            data: [0, 100, 0, 0, 0, 0, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(201, 203, 207, 1)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            // borderWidth: 1,
            // hoverBorderWidth: 8,
            // hoverBorderColor: [
            //     'rgb(255, 99, 132)',
            //     'rgb(255, 159, 64)',
            //     'rgb(255, 205, 86)',
            //     'rgb(75, 192, 192)',
            //     'rgb(54, 162, 235)',
            //     'rgb(153, 102, 255)',
            //     'rgb(201, 203, 207)'
            // ]
        }
    ]
};

export default function DoughnutChart() {
    return (
        <div className="w-full h-full">
            <div className='flex items-center text-[14px] text-[#0D1421] font-medium'>
                Token distribution
            </div>

            <div className='block md:flex items-center justify-center gap-[32px] mt-[24px]'>
                <div className="w-full md:w-[50%] min-h-[230px]">
                    <Doughnut
                        data={data}
                        options={{
                            maintainAspectRatio: false
                        }}
                    />
                </div>

                <div className="w-full md:w-[265px] mt-[24px] md:mt-0">
                    <div className='w-[100%] flex items-center justify-between text-[#616E85]'>
                        <div className='flex items-center'>
                            <div className='w-[10px] h-[10px] block rounded-full bg-[#ff9f40] me-[10px]'></div>

                            <span className='text-[12px]'>
                                Community%
                            </span>
                        </div>
                        <span className='text-[12px] font-semibold'>
                            100%
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}