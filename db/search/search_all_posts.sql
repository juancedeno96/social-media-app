select p.id as post_id, title, content, img, profile_pic, date_created, username as author_username from tale_posts p
join tale_users u on u.id = p.author_id
where lower(title) like $1
order by date_created desc;