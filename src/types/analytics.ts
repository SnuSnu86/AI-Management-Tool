export interface CallStats {
  totalCalls: number;
  minutesUsed: number;
  avgDuration: number;
  peakTime: string;
  volumeTrend: Array<{
    time: string;
    calls: number;
  }>;
}

export interface ActionMetricsData {
  totalActions: number;
  appointments: number;
  liveTransfers: number;
  smsSent: number;
  customActions: number;
  successRate: number;
}

export interface PerformanceMetrics {
  dropOffRate: number;
  scriptAdherence: number;
  goalAchievement: number;
  sentimentScore: number;
  errorRate: number;
  commonErrors: string[];
  dropOffPoints: string[];
}

export interface DateRange {
  start: Date;
  end: Date;
}

export interface AnalyticsData {
  callStats: CallStats;
  actionMetrics: ActionMetricsData;
  performanceMetrics: PerformanceMetrics;
}