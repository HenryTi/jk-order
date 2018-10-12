/// <reference types="react" />
import _ from 'lodash';
declare const _default: {
    $: {
        no: string;
        team: string;
        staff: string;
        noStaff: string;
        post: string;
        noPost: string;
        a: string;
        b: {
            s: string;
            d: () => JSX.Element;
        };
        c: () => JSX.Element;
    };
    usq: string;
    tuid: string;
    map: string;
    tuidNullCaption: string;
    submit: string;
    arrNew: string;
    arrEdit: string;
    entity: {
        message: {
            label: string;
            arrNew: string;
            arrEdit: string;
            fields: {
                fromUser: string;
                fromUnit: string;
                type: string;
                date: string;
                subject: string;
                discription: string;
                content: string;
            };
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
            confirmDelete: _.TemplateExecutor;
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
        team: {
            label: string;
        };
        section: {
            label: string;
        };
    };
};
export default _default;
