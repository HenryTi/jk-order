/// <reference types="react" />
declare const res: {
    zh: {
        CN: {
            $: {
                no: string;
                team: string;
                staff: string;
                noStaff: string;
                post: string;
                noPost: string;
                product: string;
                pack: string;
                a: string;
                b: {
                    s: string;
                    d: () => JSX.Element;
                };
                c: () => JSX.Element;
                order: {
                    top: string;
                };
            };
            usq: string;
            tuid: string;
            sheet: string;
            map: string;
            tuidPlaceHolder: string;
            none: string;
            submit: string;
            arrNew: string;
            arrEdit: string;
            entity: {
                product: {
                    label: string;
                    fields: {
                        discription: string;
                        packType: string;
                    };
                    arrs: {
                        pack: {
                            label: string;
                            fields: {
                                ratio: string;
                                name: {
                                    label: string;
                                    placeHolder: string;
                                };
                            };
                        };
                    };
                };
                packType: {
                    label: string;
                    fields: {
                        name: string;
                        discription: {
                            label: string;
                            placeHolder: string;
                        };
                    };
                };
                customer: {
                    label: string;
                    fields: {
                        discription: string;
                    };
                };
                order: {
                    label: string;
                    arrNew: string;
                    arrEdit: string;
                    title: import("lodash").TemplateExecutor;
                    fields: {
                        customer: string;
                        fromUnit: string;
                        type: string;
                        date: string;
                        subject: string;
                        discription: string;
                        content: string;
                    };
                    arrs: {
                        products: {
                            label: string;
                            fields: {
                                product: {
                                    label: string;
                                    placeHolder: string;
                                };
                                pack: {
                                    label: string;
                                    placeHolder: string;
                                };
                                price: {
                                    label: string;
                                    suffix: string;
                                };
                                quantity: {
                                    label: string;
                                };
                                amount: {
                                    label: string;
                                    suffix: string;
                                };
                            };
                        };
                    };
                    states: {
                        $: {
                            label: string;
                            actions: {
                                submit: {
                                    label: string;
                                };
                            };
                        };
                    };
                };
                price: {
                    label: string;
                };
                getMessage: {
                    label: string;
                    submit: string;
                    fields: {
                        msg: string;
                    };
                };
                newMessage: {
                    label: string;
                    fields: {
                        type: string;
                        subject: string;
                    };
                    arrs: {
                        to: {
                            label: string;
                            newSubmit: string;
                            editSumbit: string;
                        };
                        cc: {
                            label: string;
                            newSubmit: string;
                            editSumbit: string;
                        };
                    };
                };
                sectionTeam: {
                    label: string;
                };
                teamPerson: {
                    label: string;
                    fields: {};
                    confirmDelete: import("lodash").TemplateExecutor;
                };
                teamOrganization: {
                    label: string;
                };
                teamPosts: {
                    label: string;
                };
                person: {
                    label: string;
                    fields: {
                        name: string;
                        nick: string;
                        given: string;
                        sur: string;
                        gender: string;
                        user: string;
                    };
                };
                organization: {
                    label: string;
                    arrs: {
                        post: {
                            label: string;
                        };
                    };
                };
                user: {
                    label: string;
                };
            };
        };
    };
};
export declare const dictionary: any;
export default res;
