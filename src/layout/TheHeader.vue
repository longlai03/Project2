<template>
    <div class="nav-bar d-flex d-justify-between d-items-center">
        <!-- Left -->
        <div class="nav-bar-left d-flex d-items-center d-gap-2">
            <FontHeaderIcon :icon="faGrip" />
            <Logo :src="LogoImage" title='Tuyển dụng' />
            <SearchMs :search-icon="faSearch" placeholder="Tìm kiếm tin tuyển dụng, ứng viên, nhân tài" />
        </div>
        <!-- Right -->
        <div class="nav-bar-right d-flex d-items-center">
            <ul class="d-flex d-gap-2 d-items-center">
                <li>
                    <a href="#">
                        <FontHeaderIcon :icon="faEarthAsia" icon-text="Tin tuyển dụng" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontHeaderIcon :icon="faBullhorn" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontHeaderIcon :icon="faCommentDots" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontHeaderIcon :icon="faBell" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontHeaderIcon :icon="faCircleQuestion" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontHeaderIcon :icon="faEllipsis" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontHeaderIcon :icon="faBookOpenReader" />
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
import Logo from '@/components/icon/LogoMs.vue';
import LogoImage from '@/assets/images/logo.png';
import { faBell, faBullhorn, faEarthAsia, faEllipsis, faGrip, faSearch } from '@fortawesome/free-solid-svg-icons';
import FontHeaderIcon from '@/components/icon/FontHeaderIcon.vue';
import { faCircleQuestion, faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons/faBookOpenReader';
import avatarPlaceholder from '@/assets/images/employee1.jpg';
import Avatar from '@/components/icon/AvatarMs.vue';
import SearchMs from '@/components/control/SearchMs.vue';

</script>
<style scoped>
.nav-bar {
    background-color: var(--color-white);
    padding-left: 16px;
    padding-right: 16px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);

}
</style>