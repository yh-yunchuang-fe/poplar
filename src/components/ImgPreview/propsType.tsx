export default interface IImgPreviewProps {
    deleteIcon?: boolean;
    prefixCls?: string;
    visible: boolean;
    imgUrls: any[];
    index: number;
    onClose: (x?: any) => any;
    onDelete?: (x?: number, y?: any[]) => any;
    onChange?: (x?: number, y?: any[]) => any;
}
