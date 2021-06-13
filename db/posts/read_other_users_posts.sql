select p.id as post_id, title, content, img, profile_pic, username as author_username, date_created from tale_posts p
join tale_users u on u.id = p.author_id
where author_id != $1
order by date_created desc;