<template>
    <div class="nav-bar d-flex d-justify-between d-items-center">
        <!-- Left -->
        <div class="nav-bar-left d-flex d-items-center d-gap-2">
            <FontHeaderIcon :icon="faGrip" />
            <Logo :src="LogoImage" title='Tuyển dụng' />
            <MsSearch :search-icon="faSearch" placeholder="Tìm kiếm tin tuyển dụng, ứng viên, nhân tài" />
        </div>
        <!-- Right -->
        <div class="nav-bar-right d-flex d-items-center">
            <ul class="d-flex d-gap-2 d-items-center">
                <li v-for="(item, index) in headerIconList" :key="index">
                    <a :href="item.link">
                        <FontHeaderIcon :icon="item.icon" :icon-text="item?.iconText ?? undefined" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Avatar :avatar-src="avatarPlaceholder" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import Logo from '@/components/ms-icons/MsLogo.vue';
import LogoImage from '@/assets/images/logo.png';
import { faBell, faBullhorn, faEarthAsia, faEllipsis, faGrip, faSearch } from '@fortawesome/free-solid-svg-icons';
import FontHeaderIcon from '@/components/ms-icons/FontHeaderIcon.vue';
import { faCircleQuestion, faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons/faBookOpenReader';
import avatarPlaceholder from '@/assets/images/employee1.jpg';
import Avatar from '@/components/ms-avatar/MsAvatar.vue';
import MsSearch from '@/components/ms-input/MsSearch.vue';

const headerIconList = [
    {
        icon: faEarthAsia,
        iconText: 'Tin tuyển dụng',
        link: '#'
    },
    {
        icon: faBullhorn,
        link: '#'
    },
    {
        icon: faCommentDots,
        link: '#'
    },
    {
        icon: faBell,
        link: '#'
    },
    {
        icon: faCircleQuestion,
        link: '#'
    },
    {
        icon: faEllipsis,
        link: '#'
    },
    {
        icon: faBookOpenReader,
        link: '#'
    },
]
</script>
<style scoped>
.nav-bar {
    background-color: var(--color-white);
    padding-left: 16px;
    padding-right: 16px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);

}
</style>