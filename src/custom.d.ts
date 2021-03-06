type RootState = {
  recordList: RecordItem[];
  createRecordError: Error | null;
  tagList: Tag[];
  currentTag?: Tag;
}
type RecordItem = {
  tags: Tag[];
  notes: string;
  type: string;
  amount: number;
  createAt?: string;//类
}

type Tag = {
  id: string;
  name: string;
}
