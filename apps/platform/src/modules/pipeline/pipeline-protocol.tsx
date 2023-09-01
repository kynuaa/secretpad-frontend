import { CopyOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';

export enum PipelineTemplateType {
  BLANK = 'blank',
  RISK = 'risk', // 金融风控
  PSI = 'psi', // 联合圈人 // 联合圈人
  RISK_GUIDE = 'risk-guide', // 金融风控
  PSI_GUIDE = 'psi-guide',
}

export type Pipeline = {
  projectId?: string | string[] | null;
  id?: string; // maybe should delete
  graphId?: string;
  name: string;
  templateType?: PipelineTemplateType;
};

export type PipelineTreeItem = {
  key: string;
  title: string;
};

export interface PipelineTemplateContribution {
  type: PipelineTemplateType;
  name: string;
  argsFilled: boolean;
  description?: string;
  minimap?: string;
  content: (graphId: string, options?: any) => { edges: any[]; nodes: any[] };
}

export const PipelineCommands = {
  COPY: {
    id: 'pipeline.copy',
    label: '复制',
    icon: <CopyOutlined />,
  },
  DELETE: {
    id: 'pipeline.delete',
    label: '删除',
    icon: <DeleteOutlined />,
  },

  RENAME: {
    id: 'pipeline.rename',
    label: '重命名',
    icon: <EditOutlined />,
  },

  CREATE: {
    id: 'pipeline.create',
    label: '创建',
  },
};