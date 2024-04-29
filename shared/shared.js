function pagination(array, page, perPage) {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    return array.slice(startIndex, endIndex);
}

function totalPage(array, perPage) {
    return Math.ceil(array.length / perPage);
}

function nextId(list) {
    let maxId;
    if (list.length === 0) {
        return maxId = 1;
    } else {
        maxId = list[list.length - 1].id + 1;
    }
    return maxId;
}

const admins = [
    { id: 1, username: "admin@gmail.com", password: "admin123", role: "admin" },
    { id: 2, username: "admin2@gmail.com", password: "admin456", role: "admin" },
    { id: 3, username: "user@gmail.com", password: "user123", role: "user" },
    { id: 4, username: "cus01@gmail.com", password: "123456", role: "anonymous" },
    { id: 5, username: "cus02@gmail.com", password: "123456", role: "anonymous" },
    { id: 6, username: "cus03@gmail.com", password: "123456", role: "anonymous" },
    { id: 7, username: "cus04@gmail.com", password: "123456", role: "anonymous" },
    { id: 8, username: "cus05@gmail.com", password: "123456", role: "anonymous" },
    { id: 9, username: "cus06@gmail.com", password: "123456", role: "anonymous" },
];  

const employees = [
    {
        id: 1,
        fullname: "Tran Ngoc Thach",
        position: "manager",
        phonenumber: "0919526788",
        email: "abc@gmail.com",
        address: "123 Bui Thi Xuan",
    },
    {
        id: 2,
        fullname: "Vo Gia Phuc",
        position: "staff",
        phonenumber: "0834354677",
        email: "def@gmail.com",
        address: "Cu Chi",
    },
    {
        id: 3,
        fullname: 'employee 3',
        position: 'staff',
        phonenumber: '0903044763',
        email: 'employee3@gmail.com',
        address: 'Địa chỉ 3'
    },
    {
        id: 4,
        fullname: 'employee 4',
        position: 'staff',
        phonenumber: '0903044764',
        email: 'employee4@gmail.com',
        address: 'Địa chỉ 4'
    },
    {
        id: 5,
        fullname: 'employee 5',
        position: 'staff',
        phonenumber: '0903044765',
        email: 'employee5@gmail.com',
        address: 'Địa chỉ 5'
    },
    {
        id: 6,
        fullname: 'employee 6',
        position: 'staff',
        phonenumber: '0903044766',
        email: 'employee6@gmail.com',
        address: 'Địa chỉ 6'
    },
];

const customers = [
    {
        id: 1,
        cusname: 'Customer 01',
        phonenumber: '0918093321',
        groupname: 'group01',
        email: 'cus01@gmail.com',
        address: 'Address 01'
    },
    {
        id: 2,
        cusname: 'Customer 02',
        phonenumber: '0918093322',
        groupname: 'group01',
        email: 'cus02@gmail.com',
        address: 'Address 02'
    },
    {
        id: 3,
        cusname: 'Customer 03',
        phonenumber: '0918093323',
        groupname: 'group01',
        email: 'cus03@gmail.com',
        address: 'Address 03'
    },
    {
        id: 4,
        cusname: 'Customer 04',
        phonenumber: '0918093324',
        groupname: 'group01',
        email: 'cus04@gmail.com',
        address: 'Address 04'
    },
    {
        id: 5,
        cusname: 'Customer 05',
        phonenumber: '0918093325',
        groupname: 'group02',
        email: 'cus05@gmail.com',
        address: 'Address 05'
    },
    {
        id: 6,
        cusname: 'Customer 06',
        phonenumber: '0918093326',
        groupname: 'group02',
        email: 'cus06@gmail.com',
        address: 'Address 06'
    },
]

const groupCustomer = [
    { id: 'group01', name: 'Loyah' },
    { id: 'group02', name: 'Potential' },
    { id: 'group03', name: 'Old' },
]


const products = [
    { id: 1, proname: 'Apple MacBook Pro 17"', category: 'Apple', color: 'Gray', quantity: 35, entryprice: 30000000, price: 45000000, discount: 0, image: 'https://laptopvang.com/wp-content/uploads/2023/01/macbook_pro_16_inch_2023_m2_max_Space_gray-600x600.png', desc: 'Apple MacBook Pro 17" là một chiếc laptop có màn hình kích thước lớn, thiết kế sang trọng và chất lượng xây dựng cao. Nó được trang bị các tính năng và công nghệ tiên tiến của Apple như bộ vi xử lý mạnh mẽ, bàn phím tiện ích và hệ điều hành macOS.' },
    { id: 2, proname: 'Dell XPS 15', category: 'Dell', color: 'Silver', quantity: 25, entryprice: 25000000, price: 35000000, discount: 10, image: 'https://laptop88.vn/media/news/1008_Dellxps15.jpg', desc: 'Dell XPS 15 là một laptop mỏng nhẹ với màn hình lớn và hiển thị chất lượng cao. Với các tùy chọn bộ vi xử lý mạnh mẽ, card đồ họa đáng tin cậy và âm thanh tốt, nó phù hợp cho cả công việc và giải trí.' },
    { id: 3, proname: 'HP Spectre x360 15.6', category: 'HP', color: 'Black', quantity: 50, entryprice: 20000000, price: 30000000, discount: 20, image: 'https://laptoptitan.vn/wp-content/uploads/2020/10/HP-Spectre-X360-15-002.jpg', desc: 'HP Spectre x360 15.6" là một chiếc laptop 2 trong 1 có màn hình cảm ứng cùng khả năng xoay 360 độ. Với cấu hình mạnh mẽ và thiết kế tinh tế, nó cung cấp khả năng sử dụng linh hoạt và trải nghiệm đa dạng.' },
    { id: 4, proname: 'Asus ROG Zephyrus G14', category: 'Asus', color: 'Black', quantity: 20, entryprice: 18000000, price: 28000000, discount: 10, image: 'https://www.tncstore.vn/image/cache/catalog/Laptop%20Asus/G14%20GA401I-HHE042T/laptop-asus-rog-zephyrus-g14-ga401i-hhe042t-3-500x500.jpg', desc: 'sus ROG Zephyrus G14 là một chiếc laptop chơi game mạnh mẽ và di động. Với card đồ họa hiệu năng cao và bộ vi xử lý mới nhất, nó đáp ứng tốt cho các nhu cầu chơi game và đa phương tiện.' },
    { id: 5, proname: 'Lenovo ThinkPad X1 Carbon Gen 10"', category: 'Lenovo', color: 'Black', quantity: 30, entryprice: 22000000, price: 32000000, discount: 0, image: 'https://laptopworld.vn/media/product/12368_lenovo_thinkpad_x1_carbon_gen_10_4.jpg', desc: 'Lenovo ThinkPad X1 Carbon Gen 10" là một chiếc laptop doanh nhân mỏng nhẹ với bàn phím chất lượng và hiệu suất ổn định. Với tính bảo mật và khả năng di chuyển linh hoạt, nó được thiết kế để đáp ứng nhu cầu công việc của người dùng doanh nghiệp.' },
    { id: 6, proname: 'Microsoft Surface Laptop 4', category: 'Microsoft', color: 'Platinum', quantity: 40, entryprice: 24000000, price: 34000000, discount: 10, image: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/s/u/surface-laptop-4-02.jpg', desc: 'Microsoft Surface Laptop 4 là một chiếc laptop mỏng nhẹ, được thiết kế đẹp, với hiệu suất mạnh mẽ. Với màn hình chất lượng cao, bàn phím thoải mái và tính năng cảm ứng, nó là một lựa chọn tốt cho công việc và giải trí.' },
    { id: 7, proname: 'Acer Predator Helios 300"', category: 'Acer', color: 'Black', quantity: 15, entryprice: 15000000, price: 25000000, discount: 0, image: 'https://hanoicomputercdn.com/media/product/65758_laptop_acer_gaming_predator_helios_300_3.png', desc: 'cer Predator Helios 300" là một chiếc laptop gaming được trang bị bộ vi xử lý và card đồ họa mạnh mẽ. Với màn hình cao cấp và âm thanh vòm, nó cung cấp trải nghiệm chơi game tuyệt vời.' },
    { id: 8, proname: 'Razer Blade 15', category: 'Razer', color: 'Black', quantity: 10, entryprice: 28000000, price: 38000000, discount: 20, image: 'https://laptopgaumeo.vn/uploads/images/san-pham/razer-blade-15-advanced-2020/razer-blade-15-advanced-model-2020.jpg', desc: 'Razer Blade 15 là một chiếc laptop gaming cao cấp với thiết kế mỏng nhẹ và hiệu suất đáng kinh ngạc. Với màn hình chất lượng cao và bàn phím RGB, nó là sự lựa chọn hàng đầu cho những người yêu thích chơi game.' },
    { id: 9, proname: 'Gigabyte Aero 15 OLED', category: 'Gigabyte', color: 'Black', quantity: 20, entryprice: 25000000, price: 35000000, discount: 0, image: 'https://nguyencongpc.vn/media/product/20009-gigabyte-aero-15-oled-xd-73s1624gh-9.jpg', desc: 'Gigabyte Aero 15 OLED là một chiếc laptop mỏng nhẹ với màn hình OLED chất lượng cao, mang đến độ phân giải và độ chính xác màu sắc tuyệt vời. Với cấu hình mạnh mẽ và thiết kế sang trọng, nó phù hợp cho cả công việc sáng tạo và giải trí.' },
    { id: 10, proname: 'MSI GE76 Raider', category: 'MSI', color: 'Black', quantity: 15, entryprice: 32000000, price: 42000000, discount: 20, image: 'https://product.hstatic.net/200000722513/product/-gaming-msi-raider-ge76-12uhs-480vn-2_c1146f707a554e27ae7d607a30df199c_578fe25ebfcc4714bb0b9f96e0dca7a0.jpg', desc: 'MSI GE76 Raider là một chiếc laptop gaming cao cấp với màn hình lớn và hiệu suất mạnh mẽ. Với card đồ họa đáng tin cậy và hệ thống làm mát hiệu quả, nó cung cấp trải nghiệm chơi game tuyệt vời.' },
    //
    { id: 11, proname: 'Alienware m15 R6', category: 'Alienware', color: 'Black', quantity: 25, entryprice: 30000000, price: 40000000, discount: 0, image: 'https://nguyencongpc.vn/media/lib/17-01-2022/2048459.png', desc: 'Alienware m15 R6 là một chiếc laptop gaming mạnh mẽ với thiết kế độc đáo và hiệu suất ấn tượng. Với màn hình lớn và card đồ họa cao cấp, nó cung cấp trải nghiệm chơi game mượt mà và sống động.' },
    { id: 12, proname: 'Lenovo Legion Y540', category: 'Lenovo', color: 'Black', quantity: 20, entryprice: 20000000, price: 30000000, discount: 40, image: 'https://laptop88.vn/media/product/4519_artboard_2.png', desc: 'Lenovo Legion Y540 là một chiếc laptop gaming có hiệu suất vượt trội và kiểu dáng thể thao. Với bàn phím chất lượng và công nghệ làm mát tiên tiến, nó là lựa chọn tốt cho những người yêu thích chơi game.' },
    { id: 13, proname: 'Samsung Galaxy Book Flex2', category: 'Samsung', color: 'Mystic Bronze', quantity: 15, entryprice: 15000000, price: 25000000, discount: 10, image: 'https://cdn.tgdd.vn/Files/2020/12/18/1314663/samsung-galaxy-book-flex-2-1_800x532.jpg', desc: 'Samsung Galaxy Book Flex2 là một chiếc laptop 2 trong 1 với màn hình cảm ứng xoay 360 độ. Với thiết kế mỏng nhẹ và hiệu suất ổn định, nó cung cấp sự linh hoạt và đa dạng trong việc sử dụng.' },
    { id: 14, proname: 'Huawei MateBook X Pro', category: 'Huawei', color: 'Space Grey', quantity: 30, entryprice: 22000000, price: 32000000, discount: 0, image: 'https://didongmango.com/images/products/2022/11/01/small/huawei-matebook-x-pro-2022-53013fkr-142-ltps-laptop-ink-blue-touch-screen-i7-1260p-16gb-1tb-ssd-intel-w11-hs-_1667326115.jpg.jpg', desc: 'Huawei MateBook X Pro là một chiếc laptop mỏng nhẹ với màn hình cao cấp và hiệu suất ấn tượng. Với thiết kế sang trọng và tính năng bảo mật nâng cao, nó phù hợp cho cả công việc và giải trí.' },
    { id: 15, proname: 'LG Gram 14', category: 'LG', color: 'White', quantity: 18, entryprice: 18000000, price: 28000000, discount: 0, image: 'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/03/02/14zd90q-g-ax31a5-9.png', desc: 'LG Gram 14 là một chiếc laptop mỏng nhẹ với tuổi thọ pin lâu và màn hình chất lượng cao. Với trọng lượng nhẹ và tính di động cao, nó là lựa chọn tuyệt vời cho người dùng di chuyển nhiều.' },
    { id: 16, proname: 'Sony VAIO S13', category: 'Sony', color: 'Silver', quantity: 22, entryprice: 25000000, price: 35000000, discount: 0, image: 'https://vn-live-02.slatic.net/p/2/laptop-sony-vaio-svt13124cxs-133inch-bac-hang-nhap-khau-1449628237-678431-1-catalog_233.jpg_800x800Q100.jpg', desc: 'Sony VAIO S13 là một chiếc laptop mỏng nhẹ với hiệu năng ổn định và thiết kế tinh tế. Với màn hình sắc nét và âm thanh đáng kinh ngạc, nó cung cấp trải nghiệm giải trí tuyệt vời.' },
    { id: 17, proname: 'MSI Prestige 15', category: 'MSI', color: 'Pink', quantity: 12, entryprice: 23000000, price: 33000000, discount: 0, image: 'https://img.websosanh.vn/v2/users/root_product/images/laptop-msi-prestige-15/208pxmc5n7qyz.jpg?compress=85&width=200', desc: 'MSI Prestige 15 là một chiếc laptop mỏng nhẹ và cấu hình mạnh mẽ. Với thiết kế sang trọng và màn hình chất lượng cao, nó là lựa chọn tuyệt vời cho công việc sáng tạo và giải trí.' },
    { id: 18, proname: 'Asus VivoBook 15', category: 'Asus', color: 'Silver', quantity: 28, entryprice: 18000000, price: 28000000, discount: 0, image: 'https://dlcdnwebimgs.asus.com/gain/18023f26-289a-486c-84b3-3ef88afa94fc/', desc: 'Asus VivoBook 15 là một chiếc laptop với cấu hình ổn định và thiết kế đẹp mắt. Với màn hình lớn và thời lượng pin lâu, nó phù hợp cho công việc hàng ngày và giải trí.' },
    { id: 19, proname: 'Lenovo IdeaPad Slim 5i', category: 'Lenovo', color: 'Silver', quantity: 18, entryprice: 15000000, price: 25000000, discount: 0, image: 'https://laptopworld.vn/media/product/13011_lenovo_ideapad_slim_5i__7.jpg', desc: 'Lenovo IdeaPad Slim 5i là một chiếc laptop mỏng nhẹ và hiệu năng ổn định. Với thiết kế tinh tế và hiệu suất đáng tin cậy, nó là lựa chọn tốt cho công việc hàng ngày và giải trí.' },
    { id: 20, proname: 'Dell Inspiron 15', category: 'Dell', color: 'Black', quantity: 15, entryprice: 20000000, price: 30000000, discount: 0, image: 'https://synnexfpt.com/wp-content/uploads/2022/10/Inspiron-15-3.png', desc: 'Dell Inspiron 15 là một chiếc laptop với thiết kế đẹp mắt và hiệu suất ổn định. Với màn hình rộng và bàn phím thoải mái, nó là sự lựa chọn tốt cho công việc và giải trí hàng ngày.' },
];

const orders = [
    {
        "id": 1,
        "cusname": "Customer 01",
        "phonenumber": "0908095583",
        "address": "Address 01",
        "products": [
            {
                "cartId": 1,
                "id": 3,
                "proname": "HP Spectre x360 15.6",
                "category": "HP",
                "color": "Black",
                "quantity": 1,
                "entryprice": 20000000,
                "price": 30000000,
                "discount": 20,
                "image": "https://laptoptitan.vn/wp-content/uploads/2020/10/HP-Spectre-X360-15-002.jpg",
                "saleprice": 24000000
            },
            {
                "cartId": 2,
                "id": 4,
                "proname": "Asus ROG Zephyrus G14",
                "category": "Asus",
                "color": "Black",
                "quantity": 1,
                "entryprice": 18000000,
                "price": 28000000,
                "discount": 10,
                "image": "https://www.tncstore.vn/image/cache/catalog/Laptop%20Asus/G14%20GA401I-HHE042T/laptop-asus-rog-zephyrus-g14-ga401i-hhe042t-3-500x500.jpg",
                "saleprice": 25200000
            }
        ],
        "totalCost": 49200000,
        "status": "pending"
    },
    {
        "id": 2,
        "cusname": "Customer 02",
        "phonenumber": "0834355567",
        "address": "Address 02",
        "products": [
            {
                "cartId": 1,
                "id": 12,
                "proname": "Lenovo Legion Y540",
                "category": "Lenovo",
                "color": "Black",
                "quantity": 1,
                "entryprice": 20000000,
                "price": 30000000,
                "discount": 40,
                "image": "https://laptop88.vn/media/product/4519_artboard_2.png",
                "saleprice": 18000000
            },
            {
                "cartId": 2,
                "id": 13,
                "proname": "Samsung Galaxy Book Flex2",
                "category": "Samsung",
                "color": "Mystic Bronze",
                "quantity": 1,
                "entryprice": 15000000,
                "price": 25000000,
                "discount": 10,
                "image": "https://cdn.tgdd.vn/Files/2020/12/18/1314663/samsung-galaxy-book-flex-2-1_800x532.jpg",
                "saleprice": 22500000
            }
        ],
        "totalCost": 40500000,
        "status": "pending"
    }
];

module.exports = {
    nextId,
    pagination,
    totalPage,
    admins,
    employees,
    customers,
    groupCustomer,
    products,
    orders,
}