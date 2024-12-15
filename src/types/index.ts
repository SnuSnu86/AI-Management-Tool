export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Developer' | 'User';
  avatar: string;
  lastActive: Date;
}

export interface AISystem {
  id: string;
  name: string;
  status: 'active' | 'training' | 'stopped';
}

export interface Metrics {
  callMetrics: {
    completed: number;
    voicemail: number;
    minutesUsed: number;
    averageDuration: number;
  };
  actionMetrics: {
    appointments: number;
    other: number;
    totalActions: number;
    appointmentsScheduled: number;
    liveTransfers: number;
    smsSent: number;
  };
  analysisMetrics: {
    agentGoodbye: number;
    humanGoodbye: number;
    voicemail: number;
    goalAchievement: number;
    dropOffRate: number;
    scriptAdherence: number;
    positiveSentiment: number;
    errors: number;
  };
}