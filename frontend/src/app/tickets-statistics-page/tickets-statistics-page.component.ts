import { Component, OnInit ,AfterViewInit  } from '@angular/core';
import { TicketsService } from '../service/tickets.service';
import Chart from 'chart.js/auto';

interface TicketPriorityDistributionItem {
  _id: string; 
  count: number; 
}

interface TicketStatusDistributionItem {
  status: string; 
  percentage: number; 
}

@Component({
  selector: 'app-tickets-statistics-page',
  templateUrl: './tickets-statistics-page.component.html',
  styleUrls: ['./tickets-statistics-page.component.css']
})

export class TicketsStatisticsPageComponent implements OnInit,AfterViewInit {
  
  ticketStatistics: any; 
  constructor(private ticketService: TicketsService) {}

  ngOnInit() {
    this.fetchTicketStatistics();
    this.createMonthlyTicketsChart();

  }
  ngAfterViewInit() {
    this.renderPriorityDistributionChart();
    this.createStatusPercentageChart();

  }

  fetchTicketStatistics(): void {
    this.ticketService.getTicketStatistics().subscribe(
      (data) => {
        // Handle the fetched data here
        this.ticketStatistics = data;
        console.log(this.ticketStatistics)
      },
      (error) => {
        // Handle errors if any
        console.error('Error fetching ticket statistics:', error);
      }
    );
  }

  
  renderPriorityDistributionChart() {
    const canvas: any = document.getElementById('ticketPriorityChart');
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.ticketStatistics.ticketPriorityDistribution.map((item: TicketPriorityDistributionItem) => item._id),
        datasets: [{
          label: 'Ticket Priority Distribution',
          data: this.ticketStatistics.ticketPriorityDistribution.map((item:TicketPriorityDistributionItem) => item.count),
          backgroundColor: [
            '#ff595e',
            '#8ac926',
            '#ffca3a',

          ]
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  createMonthlyTicketsChart() {
    const ctx = document.getElementById('monthlyTicketsChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Monthly Tickets',
          data: [10, 20, 40, 20, 10, 30, 10, 20, 10, 40, 30, 10],
          borderColor: '#1982c4',
          backgroundColor: '#1982c4',
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
      }
    });
  }

  createStatusPercentageChart() {
    const ctx = document.getElementById('statusPercentageChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: this.ticketStatistics.statusDistribution.map((item:TicketStatusDistributionItem) => item.status),
        datasets: [{
          data: this.ticketStatistics.statusDistribution.map((item:TicketStatusDistributionItem) => item.percentage),
          backgroundColor: ['#ff595e','#8ac926','#ffca3a'], // You can set the colors as you prefer
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
      }
    });
  }
}

//   createStatusPercentageChart() {
//     const ctx = document.getElementById('statusPercentageChart') as HTMLCanvasElement;
//     new Chart(ctx, {
//       type: 'doughnut',
//       data: {
//         labels: ['Open', 'Closed','Pending'],
//         datasets: [{
//           data: [100,65,35], // Replace with actual data (percentage values)
//           backgroundColor: ['#1982c4','#ff595e','#ffca3a'],
//         }]
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: true,
//       }
//     });
//   }
// }
