import { AnalyticsData } from '../../../types/analytics';

export const generateMockData = (): AnalyticsData => ({
  callStats: {
    totalCalls: Math.floor(Math.random() * 1000) + 500,
    minutesUsed: Math.floor(Math.random() * 5000) + 2000,
    avgDuration: Math.floor(Math.random() * 300) + 120,
    peakTime: '2-3 PM',
    volumeTrend: Array.from({ length: 24 }, (_, i) => ({
      time: `${i}:00`,
      calls: Math.floor(Math.random() * 50) + 10
    }))
  },
  actionMetrics: {
    totalActions: Math.floor(Math.random() * 2000) + 1000,
    appointments: Math.floor(Math.random() * 500) + 200,
    liveTransfers: Math.floor(Math.random() * 300) + 100,
    smsSent: Math.floor(Math.random() * 400) + 150,
    customActions: Math.floor(Math.random() * 200) + 50,
    successRate: Math.floor(Math.random() * 30) + 70
  },
  performanceMetrics: {
    dropOffRate: Math.floor(Math.random() * 15) + 5,
    scriptAdherence: Math.floor(Math.random() * 20) + 80,
    goalAchievement: Math.floor(Math.random() * 25) + 75,
    sentimentScore: Math.floor(Math.random() * 30) + 70,
    errorRate: Math.floor(Math.random() * 10) + 2,
    commonErrors: ['Invalid Input Format', 'Connection Timeout'],
    dropOffPoints: ['Initial Greeting', 'Price Discussion']
  }
});