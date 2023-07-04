import { RefObject, useCallback } from "react";

// type DOMRectProperty = keyof Omit<DOMRect, 'toJSON'>;

// export const useGetElementProperty = <T extends HTMLElement>(
//     elementRef1: RefObject<T>, elementRef2: RefObject<T>
// ) => {
//     const getElementProperty = useCallback(
//         (targetProperty: DOMRectProperty): number[] => {
//             const clientRect1 = elementRef1.current?.getBoundingClientRect();
//             const clientRect2 = elementRef2.current?.getBoundingClientRect();
//             if (clientRect1 && clientRect2) {
//                 const clientRects = [clientRect1[targetProperty], clientRect2[targetProperty]];
//                 return clientRects;
//             }
//             return [0];
//         },
//         [elementRef1, elementRef2]
//     )

//     return {
//         getElementProperty
//     }
// }

type DOMRectProperty = keyof Omit<DOMRect, 'toJSON'>;

export const useGetElementProperty = <T extends HTMLElement>(
    elementRef: RefObject<T>
) => {
    const getElementProperty = useCallback(
        (targetProperty: DOMRectProperty): number => {
            const clientRect = elementRef.current?.getBoundingClientRect();
            if (clientRect) {
                return clientRect[targetProperty];
            }
            return 0;
        },
        [elementRef]
    );

    return {
        getElementProperty,
    };
};