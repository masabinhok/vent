1. I set up Prisma with PostgreSQL.

2. I created User model and Role Enum.

3. I implemented signup, login, logout, refresh token, and get profile routes.

4. I added RefreshTokenGuard for refresh token protection.

5. I added AuthGuard for access token protection.

6. I created a @GetUser() decorator to extract userId from JWT sub.

7. I configured environment variables using a central config file.

8. I added RBAC with three roles: admin, moderator, and user.

9. I created Prisma models: Session, and MatchmakingQueue.

10. I created Prisma enums: SessionStatus, and FriendshipStatus.

11. I built the match module:
  - Admin feature to check all requests
  – If a matchable user exists, create a session.
  – Else, add the user to the matchmaking queue.

12. I built the session module:
  - Admin feature to check all sessions
  – Create a session between two users.
  – Check if a user has an active session.
