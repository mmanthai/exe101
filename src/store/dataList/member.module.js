export default {
    namespaced: true,
    state: {
        membersList: [
            {
                id: "1",
                img: "https://cdn.pixabay.com/photo/2016/04/18/22/05/seashells-1337565__340.jpg",
                username: "lamtruong1",
                fullName: "Nguyễn Lam Trường",
                email: "lamtruong@gmail.com",
                phoneNumber: "0369852147",
                createDate: "1/5/2021",
                bookingCount: 0,
                cancelCount: 1,
                status: 0,
            },
            {
                id: "2",
                img: "https://cdn.pixabay.com/photo/2017/10/10/16/55/halloween-2837936__340.png",
                username: "hongphuc1",
                fullName: "Huỳnh Lê Hồng Phúc",
                email: "hongphuc@gmail.com",
                phoneNumber: "0258963321",
                createDate: "12/5/2022",
                bookingCount: 1,
                cancelCount: 3,
                status: 1,
            },
            {
                id: "3",
                img: "https://cdn.pixabay.com/photo/2016/12/16/15/25/christmas-1911637__340.jpg",
                username: "ducthinh1",
                fullName: "Lê Trần Đức Thịnh",
                email: "ducthinh@gmail.com",
                phoneNumber: "0200100302",
                createDate: "5/5/2021",
                bookingCount: 5,
                cancelCount: 0,
                status: 1,
            },

            {
                id: "4",
                img: "https://cdn.pixabay.com/photo/2018/05/10/20/00/gerbera-3388622__340.jpg",
                username: "nhathuy1",
                fullName: "Võ Nhật Huy",
                email: "nhathuy@gmail.com",
                phoneNumber: "0147123693",
                createDate: "10/5/2021",
                bookingCount: 0,
                cancelCount: 4,
                status: 0,
            },

            {
                id: "5",
                img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                username: "ramsey1",
                fullName: "Golden Remsey",
                email: "ramsey@gmail.com",
                phoneNumber: "0503632147",
                createDate: "10/2/2022",
                bookingCount: 12,
                cancelCount: 0,
                status: 1,
            },
            {
                id: "6",
                img: "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                username: "lukaku1",
                fullName: "Roberto Lukaku",
                email: "robertolukaku@gmail.com",
                phoneNumber: "03698521457",
                createDate: "10/2/2021",
                bookingCount: 0,
                cancelCount: 0,
                status: 0,
            },
            {
                id: "7",
                img: "https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                username: "kaka1",
                fullName: "Luiz KaKa",
                email: "kaka@gmail.com",
                phoneNumber: "0789456012",
                createDate: "22/2/2022",
                bookingCount: 0,
                cancelCount: 0,
                status: 0,
            },
        ],
    },
    getters: {
        membersList: (state) => {
            return state.membersList;
        },
        membersTotal: (state) => {
            return state.membersList.length;
        },
        searchMembers: (state) => (searchValue, currentPage, filterSelect) => {
            let filterArr = [];
            let search_arr = [];

            if (filterSelect === "1") {
                filterArr = [...state.membersList];
            } else if (filterSelect === "2") {
                filterArr = state.membersList.filter((member) => {
                    return member.status === 1;
                });
            } else if (filterSelect === "3") {
                filterArr = state.membersList.filter((member) => {
                    return member.status === 0;
                });
            }

            search_arr = filterArr.filter((member) => {
                return (
                    member.username.includes(searchValue) ||
                    member.fullName.includes(searchValue) ||
                    member.email.includes(searchValue) ||
                    member.phoneNumber.includes(searchValue)
                );
            });

            let paginated_arr = [];

            if (search_arr.length > 5) {
                let size = 5;
                let startIndex = (currentPage - 1) * size;
                let endIndex = currentPage * size;
                paginated_arr = search_arr.slice(startIndex, endIndex);
            } else {
                paginated_arr = search_arr;
            }

            let search_obj = {
                search_arr: paginated_arr,
                totalSearch: search_arr.length,
            };
            return search_obj;
        },
        memberCancelManyTimes: (state) => (currentPage) => {
            // filter member who has cancelCount larger than 2
            let search_arr = state.membersList.filter((member) => {
                return member.cancelCount > 2 && member.status === 1;
            });

            let paginated_arr = [];

            if (search_arr.length > 5) {
                let size = 5;
                let startIndex = (currentPage - 1) * size;
                let endIndex = currentPage * size;
                paginated_arr = search_arr.slice(startIndex, endIndex);
            } else {
                paginated_arr = search_arr;
            }

            let search_obj = {
                search_arr: paginated_arr,
                totalSearch: search_arr.length,
            };

            return search_obj;
        },
    },
};
1