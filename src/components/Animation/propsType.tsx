interface CSSTransitionGroupTransitionName {
    enter: string;
    enterActive?: string;
    leave: string;
    leaveActive?: string;
    appear?: string;
    appearActive?: string;
}

export default interface IAnimationProps {
    children?: any;
    component?: any;
    transitionName?: any;//string | CSSTransitionGroupTransitionName;
    transitionEnter?: boolean;
    transitionAppear?: boolean;
    transitionLeave?: boolean;
    transitionEnterTimeout?: number;
    transitionAppearTimeout?: number;
    transitionLeaveTimeout?: number;
    className?: string;
}
