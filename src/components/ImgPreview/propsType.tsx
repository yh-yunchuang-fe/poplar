export default interface IImgPreviewProps {
    deleteIcon?: boolean;
    prefixCls?: string;
    visible: boolean;
    imgUrls: any[];
    defaultIndex?: number;
    onClose: (x?: any) => any;
    onDelete?: (x?: any) => any;
}
