export class LoadService {
  private barChartData: any[] = [];
  private barChartLabels: string[] = [];

  initial(data: any, labels: string[]) {
    console.log("INITIAL");
    this.barChartData = data;
    this.barChartLabels = labels;
  }

  data() {
    console.log("DATA SERV");
    console.log(this.barChartData);
    return this.barChartData;
  }

  labels() {
    console.log("LABELS SERV");
    console.log(this.barChartLabels);
    return this.barChartLabels;
  }

}
