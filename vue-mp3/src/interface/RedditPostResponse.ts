
export interface MediaEmbed {
}

export interface RedditVideo {
    bitrate_kbps: number;
    fallback_url: string;
    height: number;
    width: number;
    scrubber_media_url: string;
    dash_url: string;
    duration: number;
    hls_url: string;
    is_gif: boolean;
    transcoding_status: string;
}

export interface SecureMedia {
    reddit_video: RedditVideo;
}

export interface SecureMediaEmbed {
}

export interface Gildings {
    gid_1: number;
}

export interface Source {
    url: string;
    width: number;
    height: number;
}

export interface Resolution {
    url: string;
    width: number;
    height: number;
}

export interface Variants {
}

export interface Image {
    source: Source;
    resolutions: Resolution[];
    variants: Variants;
    id: string;
}

export interface Preview {
    images: Image[];
    enabled: boolean;
}

export interface ResizedIcon {
    url: string;
    width: number;
    height: number;
}

export interface StaticIcon {
    url: string;
    width: number;
    format?: any;
    height: number;
}

export interface ResizedStaticIcon {
    url: string;
    width: number;
    height: number;
}

export interface Icon {
    url: string;
    width: number;
    format: string;
    height: number;
}

export interface ZeroTwo {
    resized_icons: ResizedIcon[];
    awardings_required: number;
    static_icon: StaticIcon;
    resized_static_icons: ResizedStaticIcon[];
    icon: Icon;
}

export interface ResizedIcon2 {
    url: string;
    width: number;
    height: number;
}

export interface StaticIcon2 {
    url: string;
    width: number;
    format?: any;
    height: number;
}

export interface ResizedStaticIcon2 {
    url: string;
    width: number;
    height: number;
}

export interface Icon2 {
    url: string;
    width: number;
    format: string;
    height: number;
}

export interface ThreeTwo {
    resized_icons: ResizedIcon2[];
    awardings_required: number;
    static_icon: StaticIcon2;
    resized_static_icons: ResizedStaticIcon2[];
    icon: Icon2;
}

export interface ResizedIcon3 {
    url: string;
    width: number;
    height: number;
}

export interface StaticIcon3 {
    url: string;
    width: number;
    format?: any;
    height: number;
}

export interface ResizedStaticIcon3 {
    url: string;
    width: number;
    height: number;
}

export interface Icon3 {
    url: string;
    width: number;
    format: string;
    height: number;
}

export interface SixTwo {
    resized_icons: ResizedIcon3[];
    awardings_required: number;
    static_icon: StaticIcon3;
    resized_static_icons: ResizedStaticIcon3[];
    icon: Icon3;
}

export interface ResizedIcon4 {
    url: string;
    width: number;
    height: number;
}

export interface StaticIcon4 {
    url: string;
    width: number;
    format?: any;
    height: number;
}

export interface ResizedStaticIcon4 {
    url: string;
    width: number;
    height: number;
}

export interface Icon4 {
    url: string;
    width: number;
    format: string;
    height: number;
}

export interface NineTwo {
    resized_icons: ResizedIcon4[];
    awardings_required: number;
    static_icon: StaticIcon4;
    resized_static_icons: ResizedStaticIcon4[];
    icon: Icon4;
}

export interface ResizedIcon5 {
    url: string;
    width: number;
    height: number;
}

export interface StaticIcon5 {
    url: string;
    width: number;
    format?: any;
    height: number;
}

export interface ResizedStaticIcon5 {
    url: string;
    width: number;
    height: number;
}

export interface Icon5 {
    url: string;
    width: number;
    format: string;
    height: number;
}

export interface FiveTwo {
    resized_icons: ResizedIcon5[];
    awardings_required: number;
    static_icon: StaticIcon5;
    resized_static_icons: ResizedStaticIcon5[];
    icon: Icon5;
}

export interface ResizedIcon6 {
    url: string;
    width: number;
    height: number;
}

export interface StaticIcon6 {
    url: string;
    width: number;
    format?: any;
    height: number;
}

export interface ResizedStaticIcon6 {
    url: string;
    width: number;
    height: number;
}

export interface Icon6 {
    url: string;
    width: number;
    format: string;
    height: number;
}

export interface TenTwo {
    resized_icons: ResizedIcon6[];
    awardings_required: number;
    static_icon: StaticIcon6;
    resized_static_icons: ResizedStaticIcon6[];
    icon: Icon6;
}

export interface ResizedIcon7 {
    url: string;
    width: number;
    height: number;
}

export interface StaticIcon7 {
    url: string;
    width: number;
    format?: any;
    height: number;
}

export interface ResizedStaticIcon7 {
    url: string;
    width: number;
    height: number;
}

export interface Icon7 {
    url: string;
    width: number;
    format: string;
    height: number;
}

export interface TwoFiveTwo {
    resized_icons: ResizedIcon7[];
    awardings_required: number;
    static_icon: StaticIcon7;
    resized_static_icons: ResizedStaticIcon7[];
    icon: Icon7;
}

export interface TiersByRequiredAwardings {
    0: ZeroTwo;
    3: ThreeTwo;
    6: SixTwo;
    9: NineTwo;
    5: FiveTwo;
    10: TenTwo;
    25: TwoFiveTwo;
}

export interface ResizedIcon8 {
    url: string;
    width: number;
    height: number;
}

export interface ResizedStaticIcon8 {
    url: string;
    width: number;
    height: number;
}

export interface AllAwarding {
    giver_coin_reward?: number;
    subreddit_id?: any;
    is_new: boolean;
    days_of_drip_extension: number;
    coin_price: number;
    id: string;
    penny_donate?: number;
    award_sub_type: string;
    coin_reward: number;
    icon_url: string;
    days_of_premium: number;
    tiers_by_required_awardings: TiersByRequiredAwardings;
    resized_icons: ResizedIcon8[];
    icon_width: number;
    static_icon_width: number;
    start_date?: any;
    is_enabled: boolean;
    awardings_required_to_grant_benefits?: number;
    description: string;
    end_date?: any;
    subreddit_coin_reward: number;
    count: number;
    static_icon_height: number;
    name: string;
    resized_static_icons: ResizedStaticIcon8[];
    icon_format: string;
    icon_height: number;
    penny_price?: number;
    award_type: string;
    static_icon_url: string;
}

export interface RedditVideo2 {
    bitrate_kbps: number;
    fallback_url: string;
    height: number;
    width: number;
    scrubber_media_url: string;
    dash_url: string;
    duration: number;
    hls_url: string;
    is_gif: boolean;
    transcoding_status: string;
}

export interface Media {
    reddit_video: RedditVideo2;
}

export interface MediaEmbed2 {
}

export interface RedditVideo3 {
    bitrate_kbps: number;
    fallback_url: string;
    height: number;
    width: number;
    scrubber_media_url: string;
    dash_url: string;
    duration: number;
    hls_url: string;
    is_gif: boolean;
    transcoding_status: string;
}

export interface SecureMedia2 {
    reddit_video: RedditVideo3;
}

export interface SecureMediaEmbed2 {
}

export interface Gildings2 {
    gid_1: number;
}

export interface Source2 {
    url: string;
    width: number;
    height: number;
}

export interface Resolution2 {
    url: string;
    width: number;
    height: number;
}

export interface Variants2 {
}

export interface Image2 {
    source: Source2;
    resolutions: Resolution2[];
    variants: Variants2;
    id: string;
}

export interface Preview2 {
    images: Image2[];
    enabled: boolean;
}

export interface ResizedIcon9 {
    url: string;
    width: number;
    height: number;
}

export interface ResizedStaticIcon9 {
    url: string;
    width: number;
    height: number;
}

export interface AllAwarding2 {
    giver_coin_reward?: number;
    subreddit_id?: any;
    is_new: boolean;
    days_of_drip_extension: number;
    coin_price: number;
    id: string;
    penny_donate?: number;
    award_sub_type: string;
    coin_reward: number;
    icon_url: string;
    days_of_premium: number;
    tiers_by_required_awardings?: any;
    resized_icons: ResizedIcon9[];
    icon_width: number;
    static_icon_width: number;
    start_date?: any;
    is_enabled: boolean;
    awardings_required_to_grant_benefits?: any;
    description: string;
    end_date?: any;
    subreddit_coin_reward: number;
    count: number;
    static_icon_height: number;
    name: string;
    resized_static_icons: ResizedStaticIcon9[];
    icon_format: string;
    icon_height: number;
    penny_price?: number;
    award_type: string;
    static_icon_url: string;
}

export interface RedditVideo4 {
    bitrate_kbps: number;
    fallback_url: string;
    height: number;
    width: number;
    scrubber_media_url: string;
    dash_url: string;
    duration: number;
    hls_url: string;
    is_gif: boolean;
    transcoding_status: string;
}

export interface Media2 {
    reddit_video: RedditVideo4;
}

export interface CrosspostParentList {
    approved_at_utc?: any;
    subreddit: string;
    selftext: string;
    author_fullname: string;
    saved: boolean;
    mod_reason_title?: any;
    gilded: number;
    clicked: boolean;
    title: string;
    link_flair_richtext: any[];
    subreddit_name_prefixed: string;
    hidden: boolean;
    pwls: number;
    link_flair_css_class?: any;
    downs: number;
    thumbnail_height: number;
    top_awarded_type?: any;
    hide_score: boolean;
    name: string;
    quarantine: boolean;
    link_flair_text_color: string;
    upvote_ratio: number;
    author_flair_background_color?: any;
    subreddit_type: string;
    ups: number;
    total_awards_received: number;
    media_embed: MediaEmbed2;
    thumbnail_width: number;
    author_flair_template_id?: any;
    is_original_content: boolean;
    user_reports: any[];
    secure_media: SecureMedia2;
    is_reddit_media_domain: boolean;
    is_meta: boolean;
    category?: any;
    secure_media_embed: SecureMediaEmbed2;
    link_flair_text: string;
    can_mod_post: boolean;
    score: number;
    approved_by?: any;
    author_premium: boolean;
    thumbnail: string;
    edited: boolean;
    author_flair_css_class?: any;
    author_flair_richtext: any[];
    gildings: Gildings2;
    post_hint: string;
    content_categories?: any;
    is_self: boolean;
    mod_note?: any;
    created: number;
    link_flair_type: string;
    wls: number;
    removed_by_category?: any;
    banned_by?: any;
    author_flair_type: string;
    domain: string;
    allow_live_comments: boolean;
    selftext_html?: any;
    likes?: any;
    suggested_sort?: any;
    banned_at_utc?: any;
    url_overridden_by_dest: string;
    view_count?: any;
    archived: boolean;
    no_follow: boolean;
    is_crosspostable: boolean;
    pinned: boolean;
    over_18: boolean;
    preview: Preview2;
    all_awardings: AllAwarding2[];
    awarders: any[];
    media_only: boolean;
    can_gild: boolean;
    spoiler: boolean;
    locked: boolean;
    author_flair_text?: any;
    treatment_tags: any[];
    visited: boolean;
    removed_by?: any;
    num_reports?: any;
    distinguished?: any;
    subreddit_id: string;
    mod_reason_by?: any;
    removal_reason?: any;
    link_flair_background_color: string;
    id: string;
    is_robot_indexable: boolean;
    report_reasons?: any;
    author: string;
    discussion_type?: any;
    num_comments: number;
    send_replies: boolean;
    whitelist_status: string;
    contest_mode: boolean;
    mod_reports: any[];
    author_patreon_flair: boolean;
    author_flair_text_color?: any;
    permalink: string;
    parent_whitelist_status: string;
    stickied: boolean;
    url: string;
    subreddit_subscribers: number;
    created_utc: number;
    num_crossposts: number;
    media: Media2;
    is_video: boolean;
}

export interface Data2 {
    approved_at_utc?: any;
    subreddit: string;
    selftext: string;
    author_fullname: string;
    saved: boolean;
    mod_reason_title?: any;
    gilded: number;
    clicked: boolean;
    title: string;
    link_flair_richtext: any[];
    subreddit_name_prefixed: string;
    hidden: boolean;
    pwls: number;
    link_flair_css_class: string;
    downs: number;
    thumbnail_height?: number;
    top_awarded_type: string;
    hide_score: boolean;
    name: string;
    quarantine: boolean;
    link_flair_text_color: string;
    upvote_ratio: number;
    author_flair_background_color: string;
    subreddit_type: string;
    ups: number;
    total_awards_received: number;
    media_embed: MediaEmbed;
    thumbnail_width?: number;
    author_flair_template_id?: any;
    is_original_content: boolean;
    user_reports: any[];
    secure_media: SecureMedia;
    is_reddit_media_domain: boolean;
    is_meta: boolean;
    category?: any;
    secure_media_embed: SecureMediaEmbed;
    link_flair_text?: any;
    can_mod_post: boolean;
    score: number;
    approved_by?: any;
    author_premium: boolean;
    thumbnail: string;
    edited: boolean;
    author_flair_css_class: string;
    author_flair_richtext: any[];
    gildings: Gildings;
    post_hint: string;
    content_categories?: any;
    is_self: boolean;
    mod_note?: any;
    created: number;
    link_flair_type: string;
    wls: number;
    removed_by_category?: any;
    banned_by?: any;
    author_flair_type: string;
    domain: string;
    allow_live_comments: boolean;
    selftext_html?: any;
    likes?: any;
    suggested_sort: string;
    banned_at_utc?: any;
    url_overridden_by_dest: string;
    view_count?: any;
    archived: boolean;
    no_follow: boolean;
    is_crosspostable: boolean;
    pinned: boolean;
    over_18: boolean;
    preview: Preview;
    all_awardings: AllAwarding[];
    awarders: any[];
    media_only: boolean;
    can_gild: boolean;
    spoiler: boolean;
    locked: boolean;
    author_flair_text?: any;
    treatment_tags: any[];
    visited: boolean;
    removed_by?: any;
    num_reports?: any;
    distinguished?: any;
    subreddit_id: string;
    mod_reason_by?: any;
    removal_reason?: any;
    link_flair_background_color: string;
    id: string;
    is_robot_indexable: boolean;
    report_reasons?: any;
    author: string;
    discussion_type?: any;
    num_comments: number;
    send_replies: boolean;
    whitelist_status: string;
    contest_mode: boolean;
    mod_reports: any[];
    author_patreon_flair: boolean;
    author_flair_text_color: string;
    permalink: string;
    parent_whitelist_status: string;
    stickied: boolean;
    url: string;
    subreddit_subscribers: number;
    created_utc: number;
    num_crossposts: number;
    media: Media;
    is_video: boolean;
    author_cakeday?: boolean;
    crosspost_parent_list: CrosspostParentList[];
    crosspost_parent: string;
}

export interface Child {
    kind: string;
    data: Data2;
}

export interface Data {
    modhash: string;
    dist: number;
    children: Child[];
    after: string;
    before?: any;
}

export interface RedditPostResponse {
    kind?: string;
    data?: Data;
}


