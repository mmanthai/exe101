<template>
    <div class="flex h-screen" @click="closePopUp">
        <div class="flex-1 w-full overflow-auto h-screen bg-[#F8F9FF] flex flex-col scroll-content">
            <the-header />
            <NotifyDetail />
        </div>
    </div>
</template>

<script>
import NotifyDetail from '@/components/layout/admin/NotifyDetail.vue'

export default {
    components: {
        NotifyDetail
    }
}
</script>